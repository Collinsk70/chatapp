// src/App.jsx
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";

// Connect to the backend server
const socket = io("http://localhost:3000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Listen for incoming messages from the server
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Clean up the socket connection
    return () => {
      socket.disconnect();
    };
  }, []);

  // Send message to server
  const sendMessage = (message) => {
    if (message.trim() !== "") {
      socket.emit("send_message", message);
      setMessages((prevMessages) => [...prevMessages, message]);  // Add message to chat window
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Real-Time Chat</h1>
      <ChatWindow messages={messages} />
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
}

export default App;
