"use client";
import { TypingAnimation } from "../magicui/typing-animation";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Links() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);

    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div className="absolute bottom-4 left-4 flex flex-col items-start font-mono">
      <div className="group flex flex-row-reverse items-center gap-2 xl:flex-row">
        <p>
          (
          <TypingAnimation
            startOnView
            duration={50}
            as="span"
            className="inline-block text-base font-normal"
          >
            joaoinez.info@gmail.com
          </TypingAnimation>
          )
        </p>
        <button
          onClick={() => handleCopy("joaoinez.info@gmail.com", "email")}
          className="transition-opacity xl:opacity-0 xl:group-hover:opacity-100"
          aria-label="Copy email"
        >
          {copiedEmail ? <Check size="1rem" /> : <Copy size="1rem" />}
        </button>
      </div>
      <div className="group flex flex-row-reverse items-center gap-2 xl:flex-row">
        <p>
          (
          <TypingAnimation
            startOnView
            duration={50}
            as="span"
            className="inline-block text-base font-normal"
          >
            +351 913244408
          </TypingAnimation>
          )
        </p>
        <button
          onClick={() => handleCopy("+351 913244408", "phone")}
          className="transition-opacity xl:opacity-0 xl:group-hover:opacity-100"
          aria-label="Copy phone number"
        >
          {copiedPhone ? <Check size="1rem" /> : <Copy size="1rem" />}
        </button>
      </div>
    </div>
  );
}
