import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HiSparkles } from "react-icons/hi";
import { FaWandMagicSparkles } from "react-icons/fa6";
import PromptModal from "./features/PromptModal";
import "../entrypoints/style.css"; // Import Tailwind CSS styles

// Create a container for your extension's UI
const container = document.createElement("div");
container.id = "wxt-linkedin-reply-generator";
document.body.appendChild(container);

// Main Content Script Component
const ContentScriptApp: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [textarea, setTextarea] = useState<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const focusElement = document.querySelector(".msg-form__contenteditable");

    const handleClickOutside = (event: MouseEvent) => {
      if (focusElement && !focusElement.contains(event.target as Node)) {
        setIsFocused(false);
      } else if (focusElement && focusElement.contains(event.target as Node)) {
        setIsFocused(true);
        const textAreaElement = focusElement.querySelector("p") as HTMLTextAreaElement | null;
        setTextarea(textAreaElement);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isFocused && (
        <div
          className="absolute top-24"
          style={{
            position: "fixed",
            right: "-38rem",  // Inline style to avoid issues with Tailwind parsing
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "0.5rem",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
          }}
        >
          {isOpen ? (
            <HiSparkles className="text-xl text-[#3b82f6]" />
          ) : (
            <FaWandMagicSparkles
              onClick={() => setIsOpen(true)}  // Function call, not assignment
              className="text-xl text-[#3b82f6]"
            />
          )}
        </div>
      )}
      {isOpen && textarea && (
        <PromptModal
          textarea={textarea}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

// Render the React component into the container
const root = createRoot(container);
root.render(<ContentScriptApp />);
