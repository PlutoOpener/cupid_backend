import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hey you have changed the port successfully");
});
app.listen(5000, () => {
  console.log("Server is listening on the port 5000");
});
