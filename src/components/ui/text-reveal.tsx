import React, { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

const TEXT =
  "Za každým úspešným biznisom sa skrýva príbeh, vízia a zmysel. My túto víziu pretvárame na značku, ktorá nielen skvele vyzerá, ale aj spája, inšpiruje a rastie.";

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 lg:mx-2.5 xl:mx-3">
      <span className="absolute text-white/30">{children}</span>
      <motion.span
        style={{ opacity }}
        className="text-white font-black"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default function TextReveal() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = TEXT.split(" ");

  return (
    <div ref={targetRef} className="relative z-0 h-[200vh]">
      <div className="sticky top-0 mx-auto flex h-screen w-full items-center justify-center px-4 md:px-10">
        <p className="flex flex-wrap justify-center text-[5.9vw] font-sans font-black text-white leading-[1.05] tracking-tighter">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
}
