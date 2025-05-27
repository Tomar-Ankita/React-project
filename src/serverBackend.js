const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

// API route to handle contact form submissions
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  // Here you would typically save this to a database
  console.log("Received contact form:", name, email, message);
  res.status(200).json({ message: "Thank you for your message!" });
});

// Serve React app in production
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
