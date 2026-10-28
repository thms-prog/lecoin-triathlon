"use client";

import { useEffect, useRef, useState, type PointerEvent, type MouseEvent } from "react";

// Swipe horizontal au doigt ou à la souris : `dx` suit le geste pour que le visuel bouge en direct,
// `onStep` est appelé au relâcher si le geste dépasse le seuil. Pas de setPointerCapture :
// il redirigerait le clic et casserait les liens contenus dans la zone.
export function useSwipe(onStep: (dir: 1 | -1) => void, threshold = 60) {
  const start = useRef<number | null>(null);
  const moved = useRef(false);
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);

  const end = () => {
    if (start.current === null) return;
    start.current = null;
    setDragging(false);
    if (Math.abs(dx) > threshold) onStep(dx < 0 ? 1 : -1);
    setDx(0);
  };

  return {
    dx,
    dragging,
    handlers: {
      onPointerDown: (e: PointerEvent) => {
        start.current = e.clientX;
        moved.current = false;
        setDragging(true);
      },
      onPointerMove: (e: PointerEvent) => {
        if (start.current === null) return;
        const d = e.clientX - start.current;
        if (Math.abs(d) > 6) moved.current = true;
        setDx(d);
      },
      onPointerUp: end,
      onPointerCancel: end,
      onPointerLeave: end,
      // Un glisser ne doit pas déclencher le lien sous le doigt.
      onClickCapture: (e: MouseEvent) => {
        if (moved.current) e.preventDefault();
      },
    },
  };
}

// Vrai une fois l'élément entré à l'écran : déclenche l'amorce de swipe une seule fois.
export function useSeen<T extends Element>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen] as const;
}
