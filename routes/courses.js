const express = require("express");
const router = express.Router();

const { getAllCourses, getSingleCourse } = require("../controllers/courses");

router.get("/", getAllCourses);
router.get("/course", getSingleCourse);

module.exports = router;
