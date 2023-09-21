const express = require("express");
const cors = require("cors");
const fs = require("fs");

const port = 8080;

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  const fileData = JSON.parse(fs.readFileSync(`./data/questions.json`));

  return res.status(200).json(fileData);
});

app.post("/", (req, res) => {
  const body = req.body;
  const newCharacter = {
    id: uuidv4(),
    ...body,
  };

  const fileData = JSON.parse(fs.readFileSync(`./data/questions.json`));

  fs.writeFileSync(
    "./data/students.json",
    JSON.stringify([newCharacter, ...fileData])
  );

  return res.status(200).json(newCharacter);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
