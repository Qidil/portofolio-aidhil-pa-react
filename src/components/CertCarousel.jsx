import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { motion, useMotionValue } from 'motion/react';

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

const iconColors = ['#4ECDC4', '#FFD700', '#FF00FF', '#38BDF8', '#A259FF', '#06B6D4', '#FF6B6B', '#339933', '#F29111', '#CA4245', '#00C4CC', '#FFD700'];

export default function CertCarousel({ items, children, className = '' }) {
  const trackRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [openIdx, setOpenIdx] = useState(null);
  const x = useMotionValue(0);

  const slideWidth = containerWidth;
  const itemsPerSlide = containerWidth >= 768 ? 3 : 1;
  const slideCount = Math.ceil(items.length / itemsPerSlide);

  const clampedPosition = Math.min(position, slideCount - 1);

  const slides = useMemo(() => {
    const result = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      result.push(items.slice(i, i + itemsPerSlide));
    }
    return result;
  }, [items, itemsPerSlide]);

  useEffect(() => {
    const el = trackRef.current?.parentElement;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!containerWidth) return;
    x.set(-clampedPosition * containerWidth);
  }, [containerWidth, clampedPosition, x]);

  const handleDragEnd = useCallback((_, info) => {
    setIsDragging(false);
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;
    if (direction === 0) return;
    setPosition(prev => Math.max(0, Math.min(prev + direction, slideCount - 1)));
  }, [slideCount]);

  const goTo = useCallback((idx) => setPosition(Math.max(0, Math.min(idx, slideCount - 1))), [slideCount]);

  const toggleOpen = useCallback((idx) => setOpenIdx(prev => prev === idx ? null : idx), []);

  const renderCard = (item, globalIdx) => {
    const isOpen = openIdx === globalIdx;
    const color = iconColors[globalIdx % iconColors.length];
    return (
      <div className="bg-brand-card border border-brand-border rounded-sm transition-all duration-300 w-full select-none">
        <div
          className="p-9 flex flex-col items-center text-center cursor-grab active:cursor-grabbing"
          onPointerDown={() => setIsDragging(false)}
          onPointerMove={() => setIsDragging(true)}
        >
          <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-5 text-xl" style={{
            background: `${color}20`,
            border: `1px solid ${color}40`,
            color,
          }}>
            <i className={item.icon}></i>
          </div>
          <p className="font-serif text-lg font-semibold text-white mb-2.5">{item.title}</p>
          <p className="text-[0.86rem] text-brand-muted leading-relaxed">{item.issuer} — {item.date}</p>
          {item.details && (
            <span
              onClick={() => { if (!isDragging) toggleOpen(idx); }}
              className="inline-flex items-center gap-1.5 mt-1.5 text-[0.82rem] font-semibold bg-transparent border-none cursor-pointer select-none"
              style={{
                background: 'linear-gradient(135deg, #FFD700, #FF00FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {isOpen ? 'Sembunyikan' : 'Selengkapnya'} <i className="fas fa-chevron-down text-[0.7rem]" style={{
                transform: isOpen ? 'rotate(180deg)' : '',
                transition: 'transform 0.3s ease',
              }} />
            </span>
          )}
        </div>

        {item.details && (
          <div className={`cert-details ${isOpen ? 'open' : ''}`}>
            <div className="border-t border-brand-border px-9 pb-9 text-left space-y-3">
              <ul className="space-y-1 mt-4">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="text-[0.86rem] text-brand-muted pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-brand-gold before:text-[0.7rem] before:top-[5px]">
                    {detail}
                  </li>
                ))}
              </ul>
              {item.credentialUrl && (
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold no-underline pb-0.5 hover:opacity-80"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700, #FF00FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    borderBottom: '1px solid rgba(255,215,0,.4)',
                  }}
                >
                  Link Sertifikat <i className="fas fa-arrow-up-right-from-square"></i>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  if (!containerWidth) return (
    <div ref={trackRef} className="w-full h-[200px]" />
  );

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div ref={trackRef} className="overflow-hidden rounded-sm">
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ left: -(slideCount - 1) * slideWidth, right: 0 }}
          dragElastic={0.1}
          style={{ x, width: slideWidth }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(clampedPosition * slideWidth) }}
          transition={SPRING_OPTIONS}
        >
          {slides.map((group, sIdx) => {
            const globalStart = sIdx * itemsPerSlide;
            return (
            <div key={sIdx} className="flex-shrink-0 px-1" style={{ width: slideWidth }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {group.map((item, idx) => renderCard(item, globalStart + idx))}
              </div>
            </div>
            );
          })}
        </motion.div>
      </div>

      {slideCount > 1 && (
        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2 h-2 rounded-full border-0 p-0 cursor-pointer transition-all duration-200 ${
                  clampedPosition === idx ? 'bg-brand-gold scale-125' : 'bg-brand-border'
                }`}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
