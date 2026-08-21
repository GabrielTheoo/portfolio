"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

import { cn } from "@/lib/utils";

/**
 * Animated WebGL mesh-gradient backdrop.
 *
 * Palette is the site's own: deep warm black base, `#EB3A2B` primary red,
 * and `#FFDAD6` as the light note — the upstream component shipped a
 * violet/white scheme that would have read as a different brand.
 */

/** Base layer. Ordered dark → accent → light → deep → mid so the mesh keeps
 *  a legible dark floor for the hero copy sitting on top of it. */
const BASE_COLORS = ["#0a0606", "#EB3A2B", "#FFDAD6", "#2B0A08", "#8C1D0F"];

/** Overlay layer. Fewer stops and a harder swirl give the base some structure.
 *  Shaders v0.0.80 dropped the `wireframe` prop, so the second pass leans on
 *  swirl + grain instead of mesh lines. */
const OVERLAY_COLORS = ["#0a0606", "#FFDAD6", "#EB3A2B", "#0a0606"];

const BASE_SPEED = 0.3;
const OVERLAY_SPEED = 0.2;
/** Pointer-in nudges the mesh without turning it into a distraction. */
const HOVER_MULTIPLIER = 1.6;

interface ShaderBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function ShaderBackground({ children, className }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // A full-viewport animated shader is exactly what reduced-motion is for.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const factor = reducedMotion ? 0 : isActive ? HOVER_MULTIPLIER : 1;

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden bg-[#0a0606]", className)}
    >

      {/* maxPixelCount caps the fragment cost on high-DPI displays. */}
      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={BASE_COLORS}
        speed={BASE_SPEED * factor}
        distortion={0.8}
        swirl={0.6}
        grainOverlay={0.12}
        maxPixelCount={1920 * 1080}
      />
      <MeshGradient
        className="absolute inset-0 h-full w-full opacity-50 mix-blend-screen"
        colors={OVERLAY_COLORS}
        speed={OVERLAY_SPEED * factor}
        distortion={1}
        swirl={0.9}
        grainMixer={0.3}
        rotation={35}
        maxPixelCount={1920 * 1080}
      />

      {/* Scrims: hold the copy legible on the left, and stop the shader
          from fighting the section that follows. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0a0606] via-[#0a0606]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0a0606]" />

      {children}
    </div>
  );
}
