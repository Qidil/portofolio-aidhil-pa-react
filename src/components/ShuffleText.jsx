import { useState, useEffect, useRef, useCallback, createElement } from 'react';

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

export default function ShuffleText({ texts, durations, initDurations, className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cyclePass, setCyclePass] = useState(0);
  const [displayChars, setDisplayChars] = useState(() =>
    Array.from(texts[0]).map(c => ({ char: c, settled: true }))
  );
  const animRef = useRef(null);
  const timerRef = useRef(null);
  const mountedRef = useRef(true);
  const visibleRef = useRef(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getDuration = useCallback((index) => {
    if (initDurations && cyclePass === 0) {
      return initDurations[index % initDurations.length];
    }
    return durations[index % durations.length];
  }, [durations, initDurations, cyclePass]);

  const shuffleTo = useCallback((nextIndex, wasLast) => {
    const nextChars = Array.from(texts[nextIndex]);
    const maxLen = Math.max(...texts.map(t => Array.from(t).length));
    const settleTimes = Array.from({ length: maxLen }, (_, i) => (i * 1500) / maxLen);
    const startTime = performance.now();

    const chars = Array.from({ length: maxLen }, (_, i) => ({
      char: i < nextChars.length ? nextChars[i] : '',
      settled: false,
      settleAt: startTime + settleTimes[i],
    }));

    setDisplayChars(chars);

    const getEl = (i) => containerRef.current?.children[i];

    const animate = (now) => {
      if (!mountedRef.current || document.hidden || !visibleRef.current) {
        animRef.current = requestAnimationFrame(animate);
        return;
      }

      const allSettled = settleTimes.every(t => now >= startTime + t);

      if (allSettled) {
        const final = nextChars.map(c => ({ char: c, settled: true }));
        setDisplayChars(final);
        if (wasLast) setCyclePass(1);
        setCurrentIndex(nextIndex);
        animRef.current = null;
        return;
      }

      if (!containerRef.current) return;

      for (let i = 0; i < maxLen; i++) {
        const el = getEl(i);
        if (!el) continue;
        if (now >= chars[i].settleAt) {
          if (!chars[i].settled) {
            chars[i].settled = true;
            chars[i].char = i < nextChars.length ? nextChars[i] : '';
            el.textContent = chars[i].char || '\u00A0';
            el.className = 'inline-block transition-opacity duration-150 opacity-100';
          }
        } else {
          el.textContent = CHARSET[Math.floor(Math.random() * CHARSET.length)];
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
  }, [texts]);

  const scheduleNext = useCallback(() => {
    clearTimeout(timerRef.current);
    const duration = getDuration(currentIndex);
    timerRef.current = setTimeout(() => {
      if (!mountedRef.current || document.hidden || !visibleRef.current) return;
      const next = (currentIndex + 1) % texts.length;
      const wasLast = currentIndex === texts.length - 1;
      shuffleTo(next, wasLast);
    }, duration);
  }, [currentIndex, getDuration, texts, shuffleTo]);

  useEffect(() => {
    mountedRef.current = true;
    scheduleNext();
    return () => clearTimeout(timerRef.current);
  }, [scheduleNext]);

  useEffect(() => {
    const onVisible = () => {
      if (document.hidden) {
        clearTimeout(timerRef.current);
        return;
      }
      if (!timerRef.current && !animRef.current) scheduleNext();
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      document.removeEventListener('visibilitychange', onVisible);
      mountedRef.current = false;
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [scheduleNext]);

  return createElement(
    'span',
    { ref: containerRef, className, 'aria-label': texts[currentIndex % texts.length] },
    displayChars.map((c, i) =>
      createElement('span', {
        key: i,
        className: `inline-block transition-opacity duration-150 ${c.settled ? 'opacity-100' : 'opacity-60'}`,
        style: { minWidth: c.char ? '0.5em' : '0.25em' },
      }, c.char || '\u00A0')
    )
  );
}
