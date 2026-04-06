const express = require("express");

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const BaseError = require("./errors/base.error");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// If any request comes and route starts with /api, we map it to apiRouter
app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  res.json({ message: "Problem service is alive" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  try {
    throw "Hello world";
  } catch (error) {
    console.log(error);
  }
});
