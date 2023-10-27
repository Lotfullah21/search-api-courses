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

## Sort

getting the response in sorted manner does not effect the amount of data we are returning, it is just the ordering matter.

```js
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 10;
const skip = (page - 1) \* limit;
output = output.skip(skip).limit(limit);
```

## limit,skip

but they are commonly used methods in the context of database queries, especially when working with databases like MongoDB through an ORM (Object-Relational Mapping) library like Mongoose for Node.js.

limit: The limit method is used to restrict the number of documents that are returned by a database query.

skip: The skip method is used to skip a specified number of documents in the result set. It is often used in combination with limit to implement pagination.

By skipping a certain number of documents based on the current page and the limit per page, you can navigate through the dataset in a paginated manner.

The limit and skip operations in the context of database queries are usually used for pagination. The limit specifies how many documents should be returned per page, and the skip specifies how many documents should be skipped to get to the current page.

When you set limit to 2, it means that each page should contain at most 2 documents.
When you set page to 2, you're requesting the second page of results.

## Regular Expressions

Regular expressions, often referred to as "regex" or "regexp," are powerful tools for working with text patterns. They allow you to search for, match, and manipulate strings based on specific patterns or rules. Regex patterns are composed of a combination of regular characters and special meta characters.

#### Word Boundaries:

Word boundaries in regular expressions are positions in a text where a word character (typically a letter, digit, or underscore) is adjacent to a non-word character (anything that's not a word character). Word boundaries do not consume characters; they are positions or assertions in the text.

###### Using \b for Whole Word Matching:

You can use the \b meta character to ensure that a pattern only matches when it appears as a standalone word, not as part of a larger word or sequence of characters. This is often useful for precise text matching.

For example, if you want to match the word "pen" as a whole word in a sentence, you can use the regex pattern `\bpen\b`. It ensures that "pen" is matched only when it is a standalone word, and not part of another word.

```js
const text = "pen is good and pendrive is better, pen is used for writing";
const pattern = /\bpen\b/;

const result = text.match(pattern);
console.log(result); // Output: ["pen"]
```

`b` is used for precise word matching.
when we do not use `g`, the output would be only the first matched.

```js
const text = "pen is good and pendrive is better, pen is used for writing";
const pattern = /\bpen\b/g;

const result = text.match(pattern);
console.log(result); // Output: ["pen", "pen"]
```

if `g` (global) is used, we want to search through all words and return if there are more matches.

```js
const text = "pen is good and pendrive is better, pen is used for writing";
const pattern = /\pen\/g;

const result = text.match(pattern);
console.log(result); // Output: ["pen", "pen","pen"]
```

if `b` (boundary) is not used, then it won't look for standalone words, and will match even if the pattern is sub-word of another word.

# replace()

replace method is a built-in JavaScript method used to replace substrings within a string. It allows you to search for a specific substring or a regular expression pattern within a given string and replace it with a specified replacement string or function. Here's how the replace method works:

`newString = originalString.replace(searchValue, replaceValue) `

`originalString`: it is the string we are looking for the pattern and changes will be applied to this.
`searchValue`: it is the pattern or substring we are looking for in originalString
`replaceValue`: it is the value or string that will be used in replacement to the matched string.
It can be a string or a function. If it's a string, only the first occurrence will be replaced. If it's a function, it's called for each match and allows you to perform custom replacements.

## simple case

just look for `pen` in originalString, if found, replace it with `Knowledge`

```js
const originalString = "pen, changes the world!";
const newString = originalString.replace("pen", "knowledge");

console.log(newString); // Output: "Hello, universe!"
```

## global case

just look for `pen` in originalString, if found, replace it with `Knowledge`

```js
const originalString = "pen, changes the world!, pen is good";
const newString = originalString.replace(/pen/g, "knowledge");

console.log(newString); // Output: "Hello, universe!"
```

```js
const originalString = "pen, changes the world!, pen is good";
const newString = originalString.replace(/pen/g, (found) => found.upperCase());

console.log(newString); // Output: "PEN, changes the world!, PEN is good"
```

look for this pattern if found, apply `upperCase()` to each of the matched patterns.
