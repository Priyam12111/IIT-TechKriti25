import React, { useRef, useState, useEffect } from "react";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const chatBoxRef = useRef(null);
  const inputRef = useRef(null);

  const responses = {
    hello: "Hello! How can I help you today?",
    hi: "Hi there! How can I assist you?",
    "how are you": "I'm just a chatbot, but thanks for asking!",
    bye: "Goodbye! Have a great day!",
    default: "I didn't understand that. Can you please rephrase?",
    help: "I can help with basic questions. Try asking about greetings or say goodbye!",
    thanks: "You're welcome!",
    name: "I'm a simple chatbot. You can call me ChatBot!",
    time: `Current time is ${new Date().toLocaleTimeString()}`,
    date: `Today's date is ${new Date().toLocaleDateString()}`,
  };

  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [expanded]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (message, isUser = false) => {
    setMessages((prevMessages) => [...prevMessages, { message, isUser }]);
  };

  const getResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    for (const [keyword, response] of Object.entries(responses)) {
      if (lowerCaseMessage.includes(keyword)) {
        return response;
      }
    }

    return responses["default"];
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const message = userInput.trim();

    if (message) {
      addMessage(message, true);
      const response = getResponse(message);
      setTimeout(() => addMessage(response), 500);
      setUserInput("");
    }
  };

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleExpand}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
          zIndex: 1001,
          fontSize: 24,
        }}
      >
        {expanded ? "−" : "+"}
      </button>

      <div
        style={{
          position: "fixed",
          bottom: expanded ? 0 : -400,
          left: 0,
          right: 0,
          height: 400,
          backgroundColor: "white",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
          transition: "bottom 0.3s ease-in-out",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          ref={chatBoxRef}
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {messages.map(({ message, isUser }, index) => (
            <div
              key={index}
              style={{
                alignSelf: isUser ? "flex-end" : "flex-start",
                backgroundColor: isUser ? "#007bff" : "#f0f0f0",
                color: isUser ? "white" : "black",
                borderRadius: 20,
                padding: "8px 16px",
                maxWidth: "80%",
              }}
            >
              {message}
            </div>
          ))}
        </div>

        <form
          onSubmit={sendMessage}
          style={{
            padding: 16,
            borderTop: "1px solid #ddd",
            display: "flex",
            gap: 8,
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            aria-label="Type your message"
            style={{
              flex: 1,
              padding: "8px 16px",
              borderRadius: 20,
              border: "1px solid #ddd",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
