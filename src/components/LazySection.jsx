import { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

export default function LazySection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px',
  });

  const placeholder = <div className="py-[100px]" />;

  return (
    <div ref={ref}>
      {inView ? <Suspense fallback={placeholder}>{children}</Suspense> : placeholder}
    </div>
  );
}
