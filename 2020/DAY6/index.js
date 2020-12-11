const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// const input = ["a", "b", "c"];

checkOneGroup = (array) => {
  let counter = 0;

  alphabet.forEach((letter) => {
    if (array.includes(letter)) {
      counter = counter + 1;
    }
  });

  return counter;
};

const fs = require("fs");
let input = fs.readFileSync("./input.txt", { encoding: "UTF-8" }).split("\n");

let newInput = [];
let answer = "";

input.forEach((e) => {
  if (e.length !== 0) {
    answer = answer + e;
  } else {
    newInput.push(answer);
    answer = "";
  }
});

let array = [];
let globalCounter = 0;

newInput.forEach((group) => {
  array = [...group];
  globalCounter = globalCounter + checkOneGroup(array);
});

console.log(globalCounter);
