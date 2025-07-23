import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const MouseAnimation: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMounted.current) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleHoverEnter = () => isMounted.current && setIsHovering(true);
    const handleHoverLeave = () => isMounted.current && setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [role='button']"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverEnter);
      el.addEventListener("mouseleave", handleHoverLeave);
    });

    return () => {
      isMounted.current = false;
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverEnter);
        el.removeEventListener("mouseleave", handleHoverLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 12,
          mass: 0.15,
        }}
      >
        <div className="w-10 h-10 border-2 border-[#45BCA0] rounded-full" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 18,
          mass: 0.25,
        }}
      >
        <div className="w-5 h-5 border-2 border-[#45BCA0] rounded-full opacity-80" />
      </motion.div>
    </>
  );
};

export default MouseAnimation;
