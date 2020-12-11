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

const input = ["a", "b", "c"];

checkGroupAnswer = (array) => {
  let counter = 0;

  alphabet.forEach((letter) => {
    if (array.includes(letter)) {
      counter = counter + 1;
    }
  });

  return counter;
};
