import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseAnimation: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, [role="button"]'
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => setIsHovering(true));
      element.addEventListener("mouseleave", () => setIsHovering(false));
    });

    return () => {
      // Clean up event listeners
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", () => setIsHovering(true));
        element.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-100"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 10,
          mass: 0.1,
        }}
      >
        <div className="w-6 h-6 border-2 border-[#45BCA0] rounded-full" />
      </motion.div>

      {/* Cursor trail */}
      <motion.div
        className="fixed pointer-events-none z-100"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.2,
        }}
      >
        <div className="w-4 h-4 border-2 border-[#45BCA0] rounded-full" />
      </motion.div>
    </>
  );
};

export default MouseAnimation;
