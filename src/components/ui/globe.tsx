"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.4, 0.6, 1],
      glowColor: [0.1, 0.1, 0.3],
      markers: [
        // San Diego
        { location: [32.7157, -117.1611], size: 0.1 },
        // New York
        { location: [40.7128, -74.006], size: 0.05 },
        // London
        { location: [51.5074, -0.1278], size: 0.05 },
        // Tokyo
        { location: [35.6762, 139.6503], size: 0.05 },
        // Sydney
        { location: [-33.8688, 151.2093], size: 0.05 },
        // Dubai
        { location: [25.2048, 55.2708], size: 0.05 },
        // Singapore
        { location: [1.3521, 103.8198], size: 0.05 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: 700, height: 700, maxWidth: "100%", aspectRatio: 1 }}
    />
  );
}
