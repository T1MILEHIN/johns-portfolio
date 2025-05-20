import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  intensity?: number;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, intensity = 1 }) => {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(true);
  
  // Characters to use for glitch effect
  const glitchChars = "!<>-_\\/[]{}—=+*^?#________";
  
  useEffect(() => {
    if (!isGlitching) return;
    
    // Initial timeout before starting glitch animation
    const timeout = setTimeout(() => {
      let iterations = 0;
      const maxIterations = 8 * intensity;
      
      // Create glitch effect by randomly replacing characters
      const interval = setInterval(() => {
        setGlitchText(prevText => 
          prevText
            .split("")
            .map((char, index) => {
              // Random chance to replace character based on intensity
              if (Math.random() < 0.15 * intensity) {
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
              }
              // Otherwise return original char or already glitched char
              return char;
            })
            .join("")
        );
        
        iterations++;
        
        // End glitch effect after max iterations
        if (iterations >= maxIterations) {
          clearInterval(interval);
          // Reset to original text
          setGlitchText(text);
          setIsGlitching(false);
        }
      }, 80 / intensity);
      
      return () => {
        clearInterval(interval);
      };
    }, 100);
    
    return () => clearTimeout(timeout);
  }, [text, intensity, isGlitching]);
  
  // Reset glitch state when text changes
  useEffect(() => {
    setGlitchText(text);
    setIsGlitching(true);
  }, [text]);
  
  // Text container animation
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.03
      }
    }
  };
  
  return (
    <div className="relative inline-block">
      {/* Main glitched text */}
      <motion.div 
        className="text-4xl md:text-6xl font-bold tracking-wide relative z-10"
        variants={containerVariants}
        animate="animate"
      >
        {glitchText}
      </motion.div>
      
      {/* Text shadow/ghost effect with CSS glitch animation */}
      <div className="absolute inset-0 text-4xl md:text-6xl font-bold tracking-wide text-[#ff00ff] opacity-70 glitch-shadow z-0">
        {text}
      </div>
      <div className="absolute inset-0 text-4xl md:text-6xl font-bold tracking-wide text-[#00ffff] opacity-70 glitch-shadow-alt z-0">
        {text}
      </div>
      
      {/* Random horizontal lines for glitch effect */}
      {isGlitching && Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px] bg-white opacity-70 z-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: 0,
            right: 0
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1, opacity: [0, 0.8, 0] }}
          transition={{ 
            duration: 0.2, 
            repeat: 1, 
            repeatType: "reverse",
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  );
};