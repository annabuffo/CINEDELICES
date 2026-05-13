import express from "express";
import cors from "cors";

const express = require("express");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend OK ✅" });
});

app.listen(3000, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});