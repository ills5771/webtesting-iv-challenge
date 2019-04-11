const express = require("express");

const Lakers = require("../lakers/lakersModel.js");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).send("Go Lakers");
});
server.post("/lakers", async (req, res) => {
  try {
    const laker = await Lakers.insert(req.body);
    res.status(201).json(laker);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding laker"
    });
  }
});

server.get("/lakers", async (req, res) => {
  const squad = await Lakers.all();

  res.status(200).json(squad);
});

module.exports = server;
