// Import the Express module
const express = require("express");
// Create an instance of Express router
const router = express.Router();

// Define a route for GET requests to the root path ("/")
router.get("/", (req, res) => {
  // When a GET request is received, send a JSON response with status 200 (OK)
  // containing an object with the name "John Doe"
  res.status(200).json({ name: "John Doe" });
});

// Export the router so that it can be used in other parts of the application
module.exports = router;
