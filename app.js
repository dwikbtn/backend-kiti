const express = require("express");
const db = require("./db");
const app = express();

// Define a route to handle GET requests
app.get("/api/data", (req, res) => {
  res.json(db);
});

// Start the Express server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
