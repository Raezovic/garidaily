import React, { useContext, useState } from 'react';
import { ChatbotContext } from './ChatbotContext';
import '../styles/Chatbot.css'; // Import CSS file for styling

const Chatbot = () => {
  const { messages, addMessage } = useContext(ChatbotContext);
  const [userInput, setUserInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    // Send user input to backend here (explained in next step)
    const userMessage = userInput;
    console.log("User message:", userMessage);
    setUserInput('');
    addMessage({ content: userMessage, from: 'user' }); // Add user message to state

    // Send user input to backend and wait for response
    fetch('http://localhost:3001/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify JSON content type
      },
      body: JSON.stringify({ message: userMessage }),
    })
      .then((response) => response.json())
      .then((data) => {
        addMessage({ content: data.response, from: 'chatbot' }); // Add chatbot response to state
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        addMessage({ content: 'An error occurred. Please try again.', from: 'chatbot' });
      });
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseChatbot = () => {
    setIsOpen(false);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <>
          <h2>Chatbot</h2>
          <ul className="messages">
            {messages.map((message, index) => (
              <li key={index} className={message.from}>
                {message.content}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              value={userInput}
              onChange={handleUserInputChange}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
          <button className="close-button" onClick={handleCloseChatbot}>
            Close
          </button>
        </>
      ) : (
        <button className="open-button" onClick={toggleChatbot}>
          Open Chatbot
        </button>
      )}
    </div>
  );
};

export default Chatbot;
