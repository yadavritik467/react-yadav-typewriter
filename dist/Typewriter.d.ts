import React from "react";
interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delay?: number;
    className?: string;
}
declare const Typewriter: React.FC<TypewriterProps>;
export default Typewriter;
