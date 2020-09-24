const express = require("express");

const router = express.Router();

const db = require("../db");

router.get("/get", async (req, res, next) => {
  const result = await db.getAllProducts();
  if (result === undefined) {
    res.json({ status: "failed" });
    console.log("failed");
  } else {
    res.json({ status: "ok", result: result });
  }
});

router.post("/addnew", async (req, res, next) => {});

module.exports = router;
