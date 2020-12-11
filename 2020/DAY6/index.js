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

checkGroupAnswer = (array) => {
  let counter = 0;

  alphabet.forEach((letter) => {
    if (array.includes(letter)) {
      counter = counter + 1;
    }
  });

  return counter;
};

// const fs = require("fs");
// const input = fs.readFileSync("./input.txt", { encoding: "UTF-8" }).split("\n");

const input = [
  "rahgpijvyfd",
  "biwvrajyp",
  "ajbrvopeiyw",
  "",
  "cv",
  "v",
  "qwvo",
  "v",
];

let newInput = [];
let answer = "";

input.forEach((e) => {
  if (e.length !== 0) {
    answer = answer + e;
  } else {
    answer = answer + "#";
  }
});

console.log(answer);
