const express = require("express");

const router = express.router;

const db = require("../db");

router.post("/addnewsize", async (req, res, next) => {
  const result = await db.addNewSizeAttribute(
    req.body.title,
    req.body.isglobal,
    req.body.isactive,
    req.body.price,
    req.body.dimension,
    req.body.tooltip,
    req.body.description
  );
  if (result === undefined) {
    res.json({ status: "failed" });
    console.log("failed");
  } else {
    res.json({ status: "ok", result: result });
  }
});

module.exports = router;
