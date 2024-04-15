import React, { createContext, useState, useContext } from 'react';

const ChatbotContext = createContext({
  messages: [],
  addMessage: () => {},
});

const ChatbotProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <ChatbotContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export { ChatbotContext, ChatbotProvider };
