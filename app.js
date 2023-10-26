// express
const express = require("express");
const app = express();
const morgan = require("morgan");

// environment variable
require("dotenv").config();

// Error middleware
const errorHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

// database
const connectDB = require("./db/connect");
const courses = require("./routes/courses");

// express json
app.use(express.json());
app.use(morgan("tiny"));
// routes
app.get("/", (req, res) => {
  res.send("home");
});

app.use("/api/v1/courses", courses);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    //  connect to db
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Listening to port ${port} ...`));
  } catch (error) {
    console.log(error);
  }
};

start();
