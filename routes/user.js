const express = require("express");
const router = express.Router();

const { getUserData } = require("../services/codeforces");

router.get("/:handle", async (req, res) => {
  const handle = req.params.handle;

  try {
    const data = await getUserData(handle);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user data" });
  }
});

module.exports = router;