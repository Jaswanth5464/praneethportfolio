
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const BinaryBackground: React.FC = () => {
  // Maintaining high density but boosting visibility and brilliance
  const bits = useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => {
      // Staggered delays specifically targeting 0s and 1s
      const baseDelay = i % 2 === 0 ? 0 : 1;
      const fineTuneDelay = Math.random() * 0.3;
      
      // Increased base opacity for better visibility
      // Randomly make some bits "High Intensity" (10% of them)
      const isHighIntensity = Math.random() > 0.9;
      const opacity = isHighIntensity 
        ? Math.random() * 0.4 + 0.3   // Much brighter (30% to 70%)
        : Math.random() * 0.2 + 0.1;  // Standard visibility (10% to 30%)

      return {
        id: i,
        left: `${Math.random() * 100}%`,
        duration: 10 + Math.random() * 20,
        delay: baseDelay + fineTuneDelay,
        fontSize: isHighIntensity ? `${Math.random() * 18 + 14}px` : `${Math.random() * 14 + 10}px`,
        value: Math.round(Math.random()),
        opacity,
        isHighIntensity,
        drift: (Math.random() - 0.5) * 120,
      };
    });
  }, []);

  return (
    <div className="binary-stream fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {bits.map((bit) => (
        <motion.div
          key={bit.id}
          initial={{ y: '110vh', x: 0, opacity: 0 }}
          animate={{ 
            y: '-10vh', 
            x: bit.drift,
            opacity: [0, bit.opacity, bit.opacity, 0],
            // Add a slight scale pulse for high intensity bits
            scale: bit.isHighIntensity ? [1, 1.2, 1] : 1
          }}
          transition={{
            duration: bit.duration,
            repeat: Infinity,
            delay: bit.delay,
            ease: "linear",
          }}
          className="absolute font-mono text-cyber-primary pointer-events-none select-none"
          style={{
            left: bit.left,
            fontSize: bit.fontSize,
            // Enhanced neon glow effect
            textShadow: bit.isHighIntensity 
              ? '0 0 12px rgba(0, 242, 255, 0.9), 0 0 20px rgba(0, 242, 255, 0.4)' 
              : '0 0 5px rgba(0, 242, 255, 0.4)',
            filter: bit.isHighIntensity ? 'brightness(1.5)' : 'none',
          }}
        >
          {bit.value}
        </motion.div>
      ))}
      
      {/* Scanline with slightly higher visibility to match the brighter bits */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-primary/10 to-transparent h-32 w-full animate-scanline pointer-events-none opacity-40" />
    </div>
  );
};

export default BinaryBackground;
