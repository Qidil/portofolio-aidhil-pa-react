import { motion, useMotionValue } from 'motion/react';
import { useState, useEffect } from 'react';

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
    }
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-pointer"
      style={{ x }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.4}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
}) {
  const [isPaused, setIsPaused] = useState(false);
  const [stack, setStack] = useState(() =>
    cards.map((content, index) => ({ id: index + 1, content }))
  );

  useEffect(() => {
    if (cards.length) {
      setStack(cards.map((content, index) => ({ id: index + 1, content })));
    }
  }, [cards]);

  const sendToBack = (id) => {
    setStack(prev => {
      const newStack = [...prev];
      const index = newStack.findIndex(card => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  const cardCount = stack.length;

  return (
    <div
      className="relative w-full"
      style={{ perspective: 600, height: '520px' }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {cardCount > 1 && (
        <div className="absolute bottom-2 right-2 z-0 flex items-end gap-[2px] pointer-events-none">
          {Array.from({ length: cardCount - 1 }).map((_, i) => (
            <div
              key={i}
              className="w-[18px] h-[4px] rounded-sm"
              style={{
                background: i % 2 === 0 ? '#1e2235' : '#2a2f45',
                marginBottom: `${i * 3}px`,
              }}
            />
          ))}
        </div>
      )}
      {stack.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="w-full h-full"
              onClick={() => {}}
              animate={{
                rotateZ: (stack.length - index - 1) * 7 + randomRotate,
                scale: 1 + index * 0.04 - stack.length * 0.04,
                transformOrigin: '100% 100%',
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
