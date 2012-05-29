var util = require("util");
var users =['Ryan','Kate','Bob','George','Kate Swart'];
var arraysearch = require("./lib/array.search.js");

console.log(util.inspect(arraysearch(users, 'ka')));
