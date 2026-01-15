"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions().reverse());
  const translate = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <div
      className="h-[20rem] sm:h-[35rem] md:h-[50rem] flex items-start justify-center relative p-2 md:p-4 -mt-[80px] sm:-mt-[150px] md:-mt-[250px] overflow-visible"
      ref={containerRef}
    >
      {/* Glow effect behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[60%] h-[40%] bg-purple-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div
        className="py-0 w-full relative overflow-visible"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 60px rgba(59, 130, 246, 0.3), 0 0 120px rgba(139, 92, 246, 0.2), 0 9px 20px #0000004a, 0 37px 37px #00000042",
      }}
      className="max-w-5xl -mt-6 sm:-mt-12 mx-auto h-[16rem] sm:h-[30rem] md:h-[40rem] w-full border-2 sm:border-4 border-[#6C6C6C] p-1.5 sm:p-2 md:p-6 bg-[#222222] rounded-[16px] sm:rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
