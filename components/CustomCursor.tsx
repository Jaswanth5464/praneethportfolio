
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const springConfig = { stiffness: 800, damping: 40 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) || target.closest('.cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Outer Ring - Minimal & Subtle */}
      <motion.div
        className="absolute top-0 left-0 w-6 h-6 border border-cyber-primary/40 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPressed ? 0.8 : isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(0, 242, 255, 1)' : 'rgba(0, 242, 255, 0.3)',
          borderWidth: isHovering ? '2px' : '1px'
        }}
      />
      
      {/* Center Point - High Precision */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-1 bg-cyber-primary rounded-full shadow-[0_0_8px_rgba(0,242,255,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Crosshair Lines - Visible only on hover */}
      {isHovering && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="absolute top-0 left-0 pointer-events-none"
          style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        >
          <div className="absolute top-[-10px] left-1/2 w-[1px] h-2 bg-cyber-primary -translate-x-1/2" />
          <div className="absolute bottom-[-10px] left-1/2 w-[1px] h-2 bg-cyber-primary -translate-x-1/2" />
          <div className="absolute left-[-10px] top-1/2 h-[1px] w-2 bg-cyber-primary -translate-y-1/2" />
          <div className="absolute right-[-10px] top-1/2 h-[1px] w-2 bg-cyber-primary -translate-y-1/2" />
        </motion.div>
      )}
    </div>
  );
};

export default CustomCursor;
