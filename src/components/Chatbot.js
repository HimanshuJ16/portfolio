"use client";

import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const iframe = document.createElement("iframe");

    const iframeStyles = (styleString) => {
      const style = document.createElement("style");
      style.textContent = styleString;
      document.head.append(style);
    };

    iframeStyles(`
      .chat-frame {
        position: fixed;
        bottom: 25px;
        right: 25px;
        border: none;
      }
    `);

    iframe.src = "https://corinna-ai-saas.vercel.app/chatbot";
    iframe.classList.add("chat-frame");
    document.body.appendChild(iframe);

    window.addEventListener("message", (e) => {
      if (e.origin !== "https://corinna-ai-saas.vercel.app") return;
      let dimensions = JSON.parse(e.data);
      iframe.width = dimensions.width;
      iframe.height = dimensions.height;
      iframe.contentWindow?.postMessage(
        "b025873b-62ef-4f3e-a727-208935704bee", "https://corinna-ai-saas.vercel.app/"
      );
    });

    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  return null; // The chatbot is injected via script, no need to return JSX
};

export default Chatbot;
