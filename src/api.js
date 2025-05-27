const express = require("express");
const router = express.Router();

// Example API route to fetch services
router.get("/services", (req, res) => {
  const services = [
    { name: "Speaker Manufacturing", description: "Custom-built DJ sound systems." },
    { name: "Speaker Repair", description: "Fast and reliable repair services." },
  ];
  res.json(services);
});

module.exports = router;
