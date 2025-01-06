import React, { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage(""); // Clear input field
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "80%", padding: "10px", marginRight: "10px" }}
      />
      <button onClick={handleSend} style={{ padding: "10px 20px" }}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
