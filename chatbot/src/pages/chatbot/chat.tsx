// Import necessary modules from React
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineUser, AiOutlineRobot } from "react-icons/ai"; // Importing icons from react-icons
// Define the Chat component
const Chat = () => {
    // State variables to manage messages, input, loading state, and errors
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    // Reference for scrolling to the bottom of the message container
    const messagesEndRef = useRef(null);
  
    // Function to scroll to the bottom of the message container
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    // Effect to scroll to the bottom whenever messages change
    useEffect(() => {
      scrollToBottom();
    }, [messages]);
  
    // Handler for input change event
    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
  
    // Handler for form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!input.trim()) return;
  
      // Set loading state and clear any previous errors
      setIsLoading(true);
      setError(null);
  
      try {
        // Send a POST request to the "/api/chat" endpoint with user input
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: input }),
        });
  
        // Check if the response is ok, if not, throw an error
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        // Parse the response data
        const data = await response.json();
  
        // Update messages with user input and assistant response
        setMessages((prev) => [
          ...prev,
          { role: "user", content: input },
          { role: "assistant", content: data.response },
        ]);
        // Clear the input field
        setInput("");
      } catch (err) {
        // If an error occurs during the fetch, set the error state
        setError(err);
      } finally {
        // Reset loading state regardless of success or failure
        setIsLoading(false);
      }
    };
    // Render the Chat component
  return (
    <div style={styles.chatWrapper}>
      {/* Render messages */}
      <div style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div key={index} style={styles.messageContainer}>
            <div style={styles.icon}>
              {/* Render user or assistant icon based on role */}
              {message.role === "user" ? <AiOutlineUser /> : <AiOutlineRobot />}
            </div>
            {/* Render message content */}
            <p style={styles.message}>{message.content}</p>
          </div>
        ))}
        {/* Reference for scrolling to bottom */}
        <div ref={messagesEndRef} />
      </div>
      {/* Form for user input */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Tell me, what is it that you desire?"
          style={styles.input}
        />
        {/* Button to submit user input */}
        <button type="submit" disabled={isLoading} style={styles.button}>
          {/* Show loading text while loading, otherwise show "Send" */}
          {isLoading ? "Loading..." : "Send"}
        </button>
      </form>
    </div>
  );
};