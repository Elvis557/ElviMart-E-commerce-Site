import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import './Chatbot.css';
import ElviBot from './ElviBot.png'; // Replace with your image path

const config = {
  botName: "ElviBot",
  initialMessages: [
    {
      type: 'text',
      id: 1,
      message: "Hi, I'm ElviBot! How can I help you today?",
    },
  ],
};

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="elvibot-wrapper">
      {/* Floating Bot Button */}
      {!isOpen && (
        <div className="elvibot-bubble" onClick={() => setIsOpen(true)}>
          <img
            src={ElviBot} 
            alt="ElviBot"
            className="elvibot-avatar"
          />
        </div>
      )}

      {/* Chat Window */}
      <div className={`elvibot-chatbox ${isOpen ? 'active' : ''}`}>
        <div className="elvibot-header">
          <span className="elvibot-title">ElviBot</span>
          <button className="elvibot-close" onClick={() => setIsOpen(false)}>×</button>
        </div>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
};

export default ChatbotComponent;
