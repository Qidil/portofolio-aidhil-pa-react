import { useState, useEffect, Suspense, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function LazySection({ sectionId, children }) {
  const [forceLoad, setForceLoad] = useState(false);
  const wrapperRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px',
  });

  useEffect(() => {
    const checkHash = () => setForceLoad(prev => prev || window.location.hash === `#${sectionId}`);
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [sectionId]);

  const shouldLoad = inView || forceLoad;
  const placeholder = <div className="py-[100px]" />;

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new MutationObserver(() => {
      if (window.location.hash === `#${sectionId}` && el.scrollHeight > 250) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        observer.disconnect();
      }
    });

    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [sectionId]);

  const setRefs = (node) => {
    wrapperRef.current = node;
    inViewRef(node);
  };

  return (
    <div ref={setRefs} id={sectionId}>
      {shouldLoad ? <Suspense fallback={placeholder}>{children}</Suspense> : placeholder}
    </div>
  );
}
