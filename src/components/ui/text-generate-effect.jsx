"use client";
import { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration, delay: stagger(0.2) }
    );
  }, [animate, filter, duration]);

  return (
    <div className={cn(className)}>
      <div className="mt-4 dark:text-white text-black">
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className={cn("opacity-0", word === "Johnbeloved" && "font-bold")}
              style={{ filter: filter ? "blur(10px)" : "none" }}
            >
              {word === "Johnbeloved" ? <strong>{word}</strong> : word}{" "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

TextGenerateEffect.propTypes = {
  words: PropTypes.string.isRequired,
  className: PropTypes.string,
  filter: PropTypes.any,
  duration: PropTypes.number
}
