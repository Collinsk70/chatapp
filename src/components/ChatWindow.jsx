// src/components/ChatWindow.jsx
import React from "react";

const ChatWindow = ({ messages }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        height: "300px",
        overflowY: "scroll",
      }}
    >
      {messages.map((msg, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          {msg}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
