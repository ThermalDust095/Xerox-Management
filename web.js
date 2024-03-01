const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/homepage.html");
});

app.get("/new-order", (req, res) => {
  res.sendFile(__dirname + "/user.html");
});

app.get("/order-history", (req, res) => {
  res.sendFile(__dirname + "/dbms5.html");
});

app.get("/client", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
