"use client";
import { useEffect, useRef } from "react";

interface GameFieldProps {
  updateFieldSize: ({
    width,
    height,
  }: {
    width: number;
    height: number;
  }) => void;
}

export default function GameField({ updateFieldSize }: GameFieldProps) {
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observeResize = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        console.log(width, height);
        updateFieldSize({ width, height });
      }
    });

    if (currentRef) {
      observeResize.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observeResize.unobserve(currentRef);
      }
    };
  }, [updateFieldSize]);

  return (
    <div
      className="relative 
    flex-[3_1_200px]
     m-3 flex justify-center items-center"
    >
      <img
        ref={ref}
        src="/puzzle-data/images/level1/9th_wave.jpg"
        alt="Picture of the author"
      ></img>
    </div>
  );
}
