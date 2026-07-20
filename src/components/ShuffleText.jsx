import { useState, useEffect, useRef, useCallback } from 'react';

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

  const getDuration = useCallback((index) => {
    if (initDurations && cyclePass === 0) {
      return initDurations[index % initDurations.length];
    }
    return durations[index % durations.length];
  }, [durations, initDurations, cyclePass]);

  const shuffleTo = useCallback((nextIndex, wasLast) => {
    const nextChars = Array.from(texts[nextIndex]);
    const maxLen = Math.max(...texts.map(t => Array.from(t).length));
    const settleTimes = Array.from({ length: maxLen }, (_, i) => (i * 750) / maxLen);

    const startTime = performance.now();

    setDisplayChars(
      Array.from({ length: maxLen }, (_, i) => ({
        char: i < nextChars.length ? nextChars[i] : '',
        settled: false,
        settleAt: startTime + settleTimes[i]
      }))
    );

    const animate = (now) => {
      if (!mountedRef.current) return;

      const allSettled = settleTimes.every(t => now >= startTime + t);

      if (allSettled) {
        setDisplayChars(
          nextChars.map(c => ({ char: c, settled: true }))
        );
        if (wasLast) setCyclePass(1);
        setCurrentIndex(nextIndex);
        animRef.current = null;
        return;
      }

      setDisplayChars(prev =>
        prev.map((p, i) => {
          if (now >= p.settleAt) {
            return { ...p, settled: true, char: i < nextChars.length ? nextChars[i] : '' };
          }
          return { ...p, char: CHARSET[Math.floor(Math.random() * CHARSET.length)] };
        })
      );

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
  }, [texts]);

  useEffect(() => {
    mountedRef.current = true;
    const duration = getDuration(currentIndex);

    timerRef.current = setTimeout(() => {
      if (!mountedRef.current) return;
      const next = (currentIndex + 1) % texts.length;
      const wasLast = currentIndex === texts.length - 1;
      shuffleTo(next, wasLast);
    }, duration);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [currentIndex, texts, shuffleTo, getDuration]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <span className={className} aria-label={texts[currentIndex % texts.length]}>
      {displayChars.map((c, i) => (
        <span
          key={i}
          className={`inline-block transition-opacity duration-150 ${c.settled ? 'opacity-100' : 'opacity-60'}`}
          style={{ minWidth: c.char ? '0.5em' : '0.25em' }}
        >
          {c.char || '\u00A0'}
        </span>
      ))}
    </span>
  );
}
