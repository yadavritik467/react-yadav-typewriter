import React, { useState, useEffect } from 'react';

var Typewriter = function (_a) {
    var words = _a.words, _b = _a.typingSpeed, typingSpeed = _b === void 0 ? 150 : _b, _c = _a.deletingSpeed, deletingSpeed = _c === void 0 ? 100 : _c, _d = _a.delay, delay = _d === void 0 ? 1000 : _d, className = _a.className;
    var _e = useState(""), currentText = _e[0], setCurrentText = _e[1];
    var _f = useState(false), isDeleting = _f[0], setIsDeleting = _f[1];
    var _g = useState(0), loopNum = _g[0], setLoopNum = _g[1];
    var _h = useState(typingSpeed), typingSpeedInternal = _h[0], setTypingSpeedInternal = _h[1];
    useEffect(function () {
        var timer;
        var handleTyping = function () {
            var fullText = words[loopNum % words.length];
            if (!isDeleting) {
                setCurrentText(function (prev) { return fullText.substring(0, prev.length + 1); });
                setTypingSpeedInternal(typingSpeed);
            }
            else {
                setCurrentText(function (prev) { return fullText.substring(0, prev.length - 1); });
                setTypingSpeedInternal(deletingSpeed);
            }
            if (!isDeleting && currentText === fullText) {
                setTimeout(function () { return setIsDeleting(true); }, delay);
            }
            else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
            timer = setTimeout(handleTyping, typingSpeedInternal);
        };
        timer = setTimeout(handleTyping, typingSpeedInternal);
        return function () { return clearTimeout(timer); };
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
    return React.createElement("p", { className: "".concat(className) },
        currentText,
        " |");
};

export { Typewriter as default };
