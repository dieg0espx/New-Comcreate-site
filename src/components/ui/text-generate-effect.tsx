"use client";

import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const prevWordsRef = useRef(words);

  useEffect(() => {
    // Reset and re-animate when words change
    const runAnimation = async () => {
      // If words changed, reset opacity first
      if (prevWordsRef.current !== words) {
        prevWordsRef.current = words;
      }

      await animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.1),
        }
      );
    };

    runAnimation();
  }, [animate, duration, filter, words]);

  return (
    <div className={cn("font-bold", className)}>
      <motion.div ref={scope} key={words}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0 inline-block mr-[0.25em]"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
