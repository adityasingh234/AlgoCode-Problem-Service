const express = require("express");

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// If any request comes and route starts with /api, we map it to apiRouter
app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  res.json({ message: "Problem service is alive" });
});

//Last middleware if any error comes
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectToDB();
  console.log("Succesfully connected to db");
});
