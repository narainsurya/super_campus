import express from "express";

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Test");
});

app.listen(PORT, () => {
  console.log(`APP STARTED ON ${PORT}`)
});