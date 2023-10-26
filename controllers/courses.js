const Courses = require("../models/courses");

const getAllCourses = async (req, res) => {
  // use only the query params that we want to use
  const { featured, provider } = req.query;
  const queryObject = {};
  // if featured provided, add this to new query object, else, the query object will be empty and the server will provide all dataset.
  if (featured) {
    // When Node.js server receives featured=true, it's automatically parsed as strings.
    queryObject.featured = featured === "true" ? true : false;
  }
  if (provider) {
    // the providers parameter's value is assigned to the e_learning_providers property in the query object.
    queryObject.e_learning_providers = provider;
  }
  // res.send(queryObject);
  // find the courses based on the new query properties present in queryObject.s
  const courses = await Courses.find(queryObject);
  res.status(200).json({ courses, nbHits: courses.length });
};

const getSingleCourse = async (req, res) => {
  res.status(200).json({ msg: "SINGLE PRODUCT" });
};

module.exports = { getAllCourses, getSingleCourse };
