"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "/kitchen3.webp",
  "/kitchen2.webp",
  "/kitchen1.webp",
  "/kitchen4.webp",
  "/kitchen5.webp",
];

export default function CardStackHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "start end"],
    layoutEffect: false,
  });

  return (
    <div ref={containerRef} className="relative w-full h-[90vh] bg-[#f9f6ef]">
      <div className="min-h-[55vh] flex items-center justify-center">
        <div className="relative w-full h-[800px] flex items-center justify-center">
          {images.map((image, index) => {
            const centerIndex = 2;
            const level = Math.abs(index - centerIndex);

            const fanRotations = [-0, -0, 0, 0, 0];
            const fanOffsetsX = [-685, -350, 0, 350, 685];
            const fanOffsetsY = [-0, -30, -65, -30, -0];
            const fanScales = [0.9, 0.95, 1, 0.95, 0.9];

            const x = useTransform(scrollYProgress, [0, 0.2], [0, fanOffsetsX[index]]);
            const y = useTransform(scrollYProgress, [0, 0.2], [0, fanOffsetsY[index]]);
            const rotate = useTransform(scrollYProgress, [0, 0.2], [0, fanRotations[index]]);
            const scale = useTransform(scrollYProgress, [0, 0.2], [1, fanScales[index]]);

            return (
              <motion.div
                key={index}
                style={{
                  x,
                  y,
                  rotate,
                  scale,
                  zIndex: 20 - level,
                  width: "340px",
                  height: "510px",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  willChange: "transform",
                }}
                className="absolute left-1/2 top-85 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
                initial={false}
                transition={{ type: "spring", damping: 30, stiffness: 100 }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
