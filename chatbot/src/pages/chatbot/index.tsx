// Import necessary modules from React
import React, { useState } from "react";
import Chat from "./chat"; // Import the Chat component
import Image from "next/image";

// Define the Index component
const Index = () => {
  // State variable to manage the visibility of the chat
  const [showChat, setShowChat] = useState(false);

  // Handler for the start button click event
  const handleStartClick = () => {
    setShowChat(true);
  };

  // Render the Index component
  return (
    <div style={styles.container}>
      {!showChat ? (
        // Render video and start button if chat is not shown
        <>
          <video autoPlay loop muted style={styles.video}>
            <source src="/shopkeeperfull.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={styles.overlay}>
            {/* Button to start the chat */}
            <button onClick={handleStartClick} style={styles.button}>
              <h1>Seek what you desire</h1>
            </button>
          </div>
        </>
      ) : (
        // Render chat interface if chat is shown
        <div style={styles.chatContainer}>
          <Image
            src="/shopkeeper.png"
            alt="Shopkeeper"
            width={150}
            height={150}
            style={styles.shopkeeperImage}
          />
          {/* Shopkeeper heading */}
          <h1 style={styles.heading}>The Shopkeeper</h1>
          {/* Shopkeeper description */}
          <p style={styles.description}>
            The Shopkeeper in the Dota Universe, a silent yet omnipotent force,
            holds the keys to victory within the chaotic battlefield, offering
            heroes the arsenal they need to shape their destinies, and should
            you want to know the world of Dota, you can ask yours truly
          </p>
          {/* Render the Chat component */}
          <Chat />
        </div>
      )}
    </div>
  );
};