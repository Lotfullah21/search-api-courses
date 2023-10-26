require("dotenv").config();

const connectDB = require("./db/connect");
const Course = require("./models/courses");
const jsonCourses = require("./courses.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    //   DELETE all the courses that are already there in the database
    await Course.deleteMany();
    //   CREATE new courses from json courses and add them to the database.
    await Course.create(jsonCourses);
    console.log("successfully data added !!!!!!!!!!");
    //   exit if the operation is successful.
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
