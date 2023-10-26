const mongoose = require("mongoose");

const courseScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
  },
  price: {
    type: Number,
    required: [true, "please provide the price"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  created_date: {
    type: Date,
    default: Date.now(),
  },
  e_learning_providers: {
    type: String,
    enum: {
      values: [
        "Coursera",
        "Udemy",
        "MIT Open Learning",
        "Stanford Online",
        "Cornell University",
        "Carnegie Mellon University",
      ],
      // using {VALUE}, the value provided by the user can be accessed.
      message: "{VALUE} is not provided",
    },
  },
});

module.exports = mongoose.model("Course", courseScheme);

// enum: [
//   "coursera",
//   "udemy",
//   "MIT open learning",
//   "stanford online",
//   "cornell university",
//   "carnegie mellon university",
// ],
