// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj2); // ["first", "last"]
// let obj3 = {};
// keys(obj3); // []

function keys(obj) {
    let objArr = [];
    for (let val in obj) {
      objArr.push(val);
    }
    return objArr;
  }
  
  let obj = { a: 1, b: 2, c: 3 };
  keys(obj); // ["a", "b", "c"]
  
  let obj2 = { first: 'Matt', last: 'Lane' };
  keys(obj2); // ["first", "last"]
  
  let obj3 = {};
  keys(obj3); // []
  
  console.log(keys(obj));
  console.log(keys(obj2));
  console.log(keys(obj3));
  
  // Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
  // IMPORTANT: Do not use the built in Object.values() function!
  // Examples:
  // let obj = { a: 1, b: 2, c: 3 };
  // values(obj); // [1,2,3]
  // let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
  // values(obj2); // ["Matt", "Lane", true]
  // let obj3 = {};
  // values(obj3); // []
  
  function values(obj) {
    let newArr = [];
    for (let val in obj) {
      newArr.push(obj[val]);
    }
    return newArr;
  }
  
  let ex2Obj = { a: 1, b: 2, c: 3 };
  values(obj); // [1,2,3]
  
  let ex2Obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
  values(obj2); // ["Matt", "Lane", true]
  
  let ex2Obj3 = {};
  values(obj3); // []
  
  console.log(values(ex2Obj));
  console.log(values(ex2Obj2));
  console.log(values(ex2Obj3));
  
  // Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
  // In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
  // IMPORTANT: Do not use the built in Object.entries() function!
  // Examples:
  // let obj = { a: 1, b: 2, c: 3 };
  // entries(obj);
  // [["a",1], ["b",2], ["c",3]]
  // let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
  // entries(obj2);
  // [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
  // let obj3 = {};
  // entries(obj3); // []
  
  function entries(obj) {
    let newArr = [];
    for (let val in obj) {
      newArr.push([val, obj[val]]);
    }
    return newArr;
  }
  
  let ex3Obj = { a: 1, b: 2, c: 3 };
  entries(obj); //[["a",1], ["b",2], ["c",3]]
  let ex3Obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
  entries(obj2); //[["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
  let ex3Obj3 = {};
  entries(obj3); // []
  
  console.log(entries(ex3Obj));
  console.log(entries(ex3Obj2));
  console.log(entries(ex3Obj3));
  
  // Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
  // The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
  // Examples:
  // pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
  // ["Tim", "Matt", "Elie"]
  // pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
  // [true, false, undefined]
  
  function pluck(arr, key) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][key] === false || arr[i][key]) {
        newArr.push(arr[i][key]);
      } else {
        newArr.push(undefined);
      }
    }
    return newArr;
  }
  
  console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')); //["Tim", "Matt", "Elie"]
  console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')); //[true, false, undefined]
  
  // Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
  // The format should be "key = value, key = value".
  // Each key/value pair should be separated by a comma and space except for the last pair.
  // Examples:
  // stringFromObject({ a: 1, b: '2' });
  // "a = 1, b = 2"
  // stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
  // "name = Elie, job = Instructor, isCatOwner = false"
  // stringFromObject({}); // ""
  
  function stringFromObject(obj) {
    let newStr = "";
    for (let val in obj) {
      newStr += val + " = " + obj[val] + ", ";
    }
    return newStr.slice(0, newStr.length - 2);
  }
  
  console.log(stringFromObject({ a: 1, b: '2' })); //"a = 1, b = 2"
  console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false })); //"name = Elie, job = Instructor, isCatOwner = false"
  console.log(stringFromObject({})); // ""
  
  // Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
  // The function should return an array with the following format: [lowestKey, highestKey]
  // Examples:
  // minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
  // [1, 10]
  // minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
  // [1, 4]
  
  function minMaxKeyInObject(obj) {
    let keys = Object.keys(obj);
    let newArr = [];
    newArr.push(Math.min(...keys), Math.max(...keys));
    return newArr;
  }
  
  console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' })); //[1, 10]
  console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' })); //[1, 4]