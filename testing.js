// let na = "sina";
// function a(n, callback) {
//   console.log(`hey ${n}`);
//   callback();
//   return n;
// }
// let result = a(na, () => {
//   console.log("hello i am in the function");
// });

//const { EventEmitter } = require("nodemailer/lib/xoauth2");

//const { max } = require("lodash");

//const { indexOf, curry, result } = require("lodash");

// console.log(result);

// const obj = [1, 2, 3];
// console.log(obj);

// for (let i = 0; i < obj.length; i++) {
//   const objs = obj[i];
//   console.log(`the ${i} index have ${objs} value`);
// }

// const keys = Object.keys(obj);

// const keys2 = Object.values(obj);
// // console.log(keys2);

// for (let i = 0; i < keys.length; i++) {
//   const key = keys[i];
//   const key2 = keys2[i];
//   console.log(`Property name: ${key}, Property value: ${key2}`);
// }

// let query = Object.keys(req.query)
// let data = query.reduce((mappedQuery, key) => {
//   let param = req.query[key];
//   if (param) {
//     // If the query parameter has a value, add it to the 'query' object.
//     mappedQuery[key] = param;
//   }
//   return mappedQuery;
// }, {})

// ==> {carName, carPrice,}
// //jo bhi value a rahi usy object mai store kara daity hai each value ko check krty hai

// let x

// let y = 20;

// if (x) {
//   console.log(x);
// }
// if () {
//   console.log(y);
// }

//callback function
// let a = 10;
// let b = 20;

// function parent() {
//   console.log("hello parent function");
//   callback(a, b);
//   return 4;
// }
// function callback(a, b) {
//   const result = a + b;
//   console.log(result);
// }
// parent(callback);

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const qustion = readline.question("Who are you?", (name) => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });

//array question for interview

//find the duplicate number of array

// var array = [
//   { id: 1, name: "mubashir", age: 27 },
//   { id: 2, name: "nehain", age: 26 },
//   { id: 3, name: "amna", age: 24 },
// ];
// // get the names of the list
// // const names = array.map((item) => item.name);
// // console.log(names);
// // get the name whose age is 27

// const user = array.filter((item) => item.age === 27).map((item) => item.name);

// console.log(user);
// // find the students who have same marks.
// let students = [
//   { name: "mubashir", age: 27, marks: 11 },
//   { name: "nehain", age: 26, marks: 63 },
//   { name: "amna", age: 24, marks: 74 },
//   { name: "zainab", age: 24, marks: 54 },
//   { name: "rana", age: 24, marks: 74 },
//   { name: "israr", age: 34, marks: 32 },
//   { name: "israr", age: 54, marks: 11 },
// ];

// const groupedByHighestMarks = students.reduce((result, student) => {
//   const { name, age, marks } = student;
//   if (!result[marks] || marks > result[marks][0].marks) {
//     result[marks] = [{ name, age, marks }];
//     console.log(result[marks]);
//   } else if (marks === result[marks][0].marks) {
//     result[marks].push({ name, age, marks });
//   }
//   return result;
// }, {});

// console.log(groupedByHighestMarks);

// Filter students with the maximum marks
// const topStudents = students.filter((student) => student.marks === maxMarks);

// console.log(topStudents);
//result: marks: 74 ==> {amna,rana} marks: 11==>{mubashir,israr}

// let a = [];
// let student = students.filter((item) => {
//   if (item.marks > a) {
//     a.push(item);
//   } else {
//     a.pop(item);
//   }
// });

// console.log(a[0].marks);
// // find the maximum number of the array
// // var maximumNumbr = Math.min(...array);
// // console.log(maximumNumbr);
// // const value = array.reduce((curr, pre) => {
// //   console.log(curr);
// //   console.log(pre);
// //   // if (curr > pre) {
// //   //   console.log(curr);
// //   // } else {
// //   //   console.log("hello");
// //   // }
// // });

// var http = require("http");
// const request = async () => {
//   const options = {
//     host: "http://worldtimeapi.org",
//     method: "GET",
//     path: "/api/timezone/America/Chicago",
//   };
//   const response = http.request(options);
//   const result = JSON.stringify(response);
//   console.log(result);
// };

// // request();
// const http = require("http");

// // Define the options for the HTTP GET request
// const options = {
//   host: "worldtimeapi.org",
//   path: "/api/timezone/America/Chicago",
//   method: "GET",
// // };
// const axios = require("axios");

// http request through axios
// async function hello() {
//   const options = {
//     method: "GET",
//     url: "https://api-basketball.p.rapidapi.com/timezone",
//     headers: {
//       "X-RapidAPI-Key": "910d6022demshbf2e3355ece1242p117479jsne66bc0f3b3b7",
//       "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// hello();

// const array = [
//   {
//     id: "1234567",
//     name: "mubashir",
//   },
// ];

// array.forEach((element) => {
//   console.log(element);
// });
// EventEmitter = require("events");

// const event = new EventEmitter();

// function sum() {
//   let a = 5;
//   let b = 5;
// }

console.log(Date.now());
