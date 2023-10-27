const Courses = require("../models/courses");

const getAllCourses = async (req, res) => {
  // use only the query params that we want to use
  const { featured, provider, name, sort, fields, numericFilters } = req.query;
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
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let output = Courses.find(queryObject);

  if (fields) {
    fieldsList = fields.split(",").join(" ");
    output = output.select(fieldsList);
  }

  if (sort) {
    sortList = sort.split(",").join(" ");
    console.log(sortList);
    output = output.sort(sortList);
  } else {
    output = output.sort("created_date");
  }

  // Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // filter based on boolean comparison for numeric data
  if (numericFilters) {
    const operators = {
      ">": "$gt",
      ">=": "$gte",
      "<": "$lt",
      "<=": "$lte",
      "=": "$eq",
    };
    const regex = /\b(>|<|=|>=|<=)\b/g;
    let filters = numericFilters.replace(
      regex,
      (match) => `-${operators[match]}-`
    );
    console.log(numericFilters);
    console.log(filters);

    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
      console.log("Field", field);
      console.log("operator", operator);
      console.log("value", value);
      console.log(queryObject);
    });
  }

  output = output.skip(skip).limit(limit);
  // find the courses based on the new query properties present in queryObject.s
  const courses = await output;

  res.status(200).json({ courses, nbHits: courses.length });
};

const getSingleCourse = async (req, res) => {
  res.status(200).json({ msg: "SINGLE PRODUCT" });
};

module.exports = { getAllCourses, getSingleCourse };
