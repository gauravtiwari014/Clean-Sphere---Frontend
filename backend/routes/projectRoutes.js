const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      title: "Garbage Monitoring",
      description: "Smart garbage collection project"
    }
  ]);
});

router.post("/", (req, res) => {
  res.json({ message: "Project Created" });
});

module.exports = router;