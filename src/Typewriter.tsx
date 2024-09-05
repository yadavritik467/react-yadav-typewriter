import React, { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
  className?:string
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delay = 1000,
  className
}) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeedInternal, setTypingSpeedInternal] = useState(typingSpeed);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      const fullText = words[loopNum % words.length];

      if (!isDeleting) {
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeedInternal(typingSpeed);
      } else {
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        setTypingSpeedInternal(deletingSpeed);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      timer = setTimeout(handleTyping, typingSpeedInternal);
    };

    timer = setTimeout(handleTyping, typingSpeedInternal);
    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    loopNum,
    typingSpeedInternal,
    words,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);

  return <p className={`${className}`}>{currentText} |</p>;
};

export default Typewriter;
