<code>
>>CMD
npm init -y
npm install
npm install dotenv
npm install nodemon
npm install mongoose
npm install express-async-errors
./package.json
"scripts": {
"start": "nodemon app.js",
"dev": "nodemon app.js"
},
</code>

## Mongoose

Mongoose is an Object Data Modeling (ODM) library for Node.js and MongoDB. It provides a higher-level, schema-based framework for interacting with MongoDB, a NoSQL database.
Mongoose simplifies working with MongoDB by offering features like data validation, schema definition, query building, and more.
Schema: Mongoose allows you to define the structure of your data using schemas. Schemas define the shape and validation rules for documents in a MongoDB collection.

Models: Models are constructors created from schemas. They provide an interface for interacting with a specific MongoDB collection. Models allow you to create, read, update, and delete documents in the collection.

Validation: Mongoose provides built-in validation for fields, allowing you to define rules for data integrity. You can specify data types, required fields, and custom validation logic.

Middleware: Middleware functions can be attached to various events in the data lifecycle, such as before or after saving a document. This enables you to perform actions like data transformation or validation before it's saved to the database.

Query Building: Mongoose provides a rich query builder, which allows you to construct complex queries using a fluent API. You can filter, sort, and project data with ease.

Middleware: You can define functions to execute before or after certain operations, such as saving a document. This allows for custom logic to be executed at specific points in the data lifecycle.

Population: Mongoose supports referencing other documents and populating them in queries. This is useful for dealing with relationships between documents.

Plugins: You can extend the functionality of Mongoose by using plugins. Plugins allow you to add reusable features to your models.

using mongoose we can interact with mongoDB

```js
const Courses = require("../models/courses");
const getAllCourses = async (req, res) => {
  // req.query is an object, {featured:true}, and we can pass to the find method.
  const courses = await Courses.find(req.query);
  res.status(200).json({ courses, nbHits: courses.length });
  console.log(req.query);
};
const getSingleCourse = async (req, res) => {
  res.status(200).json({ msg: "SINGLE PRODUCT" });
};

module.exports = { getAllCourses, getSingleCourse };
```

## HOW TO ADD AN ELEMENT TO EMPTY OBJECT

```js
const myEmptyObject = {};
```

there are mainly three ways to add properties to an empty object

#### using dot notation

```js
const myEmptyObject = {};
myEmptyObject.name = "ahmad";
myEmptyObject.age = 25;

console.log(myEmptyObject); // {name:"ahmad",age:25}
```

#### using bracket notation

```js
const myEmptyObject = {};
myEmptyObject["name"] = "ahmad";
myEmptyObject["age"] = 25;
console.log(myEmptyObject); // {name:"ahmad",age:25}
```

#### Object spread operator

You can create a new object by spreading an existing object and adding a new property in the process.

```js
const myEmptyObject = {};
const newProperties = { ...myEmptyObject, name: "ahmad", age: 25 };

console.log(newProperties); // {name:"ahmad",age:25}
```
