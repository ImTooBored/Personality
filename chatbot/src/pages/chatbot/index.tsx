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
// Inline styles for elements within the Index component
const styles = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#000",
    backgroundImage: "url(/dota2.jpeg)", // Adding the background image
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    bottom: "10%", // Adjusted to place the button closer to the bottom
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
    backgroundColor: "#000",
  },
  button: {
    padding: "20px 40px",
    fontSize: "20px",
    color: "#fff",
    background: "#808080",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  chatContainer: {
    position: "relative",
    zIndex: 3,
    width: "100%",
    minHeight: "100vh", // Ensure it takes at least the full viewport height
    maxHeight: "100%", // Adjust this as needed, or remove it if you want unlimited height
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.😎",
    overflowY: "auto", // Enable vertical scrolling if content overflows
  },
  shopkeeperImage: {
    marginBottom: "20px",
  },
  heading: {
    color: "#fff",
    fontSize: "2rem",
    margin: "20px 0 10px 0",
  },
  description: {
    color: "#ccc",
    textAlign: "center",
    maxWidth: "900px",
    marginBottom: "20px",
  },
};

// Export the Index component
export default Index;