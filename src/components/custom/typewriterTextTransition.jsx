import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TypewriterTextTransition = ({ shouldLoop = true }) => {
  const texts = ["WELCOME TO \n MY PORTFOLIO", "I'M OLUWAWOLE JOHNBELOVED"];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [finishedOnce, setFinishedOnce] = useState(false);

  useEffect(() => {
    const fullText = texts[index];
    const typingSpeed = isDeleting ? 30 : 80;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        if (!shouldLoop && index === 0) {
          setFinishedOnce(true);
          return;
        }

        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, shouldLoop]);

  if (!shouldLoop && finishedOnce) {
    return (
      <h1 className="text-2xl md:text-[53.08px] font-light tracking-widest uppercase font-specify_extra_expand_black lg:w-[800px] h-[100px] lg:leading-[70px]">
        {texts[0]}
      </h1>
    );
  }

  return (
    <h1 className="text-2xl md:text-[53.08px] font-light tracking-widest uppercase font-specify_extra_expand_black lg:w-[800px] h-[100px] lg:leading-[70px]">
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

TypewriterTextTransition.propTypes = {
  shouldLoop: PropTypes.bool,
}

export default TypewriterTextTransition;