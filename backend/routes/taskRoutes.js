const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      title: "Clean Sector A",
      description: "Waste collection task",
      status: "In Progress"
    }
  ]);
});

router.post("/", (req, res) => {
  res.json({ message: "Task Created" });
});

module.exports = router;