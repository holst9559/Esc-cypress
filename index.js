import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static("WWW"));

app.get("/", (req, res) => {
  res.send("Hooray, it works!");
});

app.listen(PORT, () => console.log(`Server is listening to port: ${PORT}`));
