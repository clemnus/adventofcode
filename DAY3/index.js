const fs = require("fs");

const input1 = fs
  .readFileSync("./input1.txt", { encoding: "UTF-8" })
  .split(",");
const input2 = fs
  .readFileSync("./input2.txt", { encoding: "UTF-8" })
  .split(",");

function determineMovements(element) {
  let initial = [];
  let i = 0;
  let count = parseInt(element.substring(1));
  let direction = element.charAt(0);
  let step;

  if (direction === "U") step = [0, 1];
  if (direction === "R") step = [1, 0];
  if (direction === "D") step = [0, -1];
  if (direction === "L") step = [-1, 0];

  while (i < count) {
    initial.push(step);
    i++;
  }
  return initial;
}

// determineMovements("R3");

function getAllMovements(array) {
  let movements = [];

  array.forEach(element => {
    determineMovements(element).forEach(position => {
      movements.push(position);
    });
  });

  return movements;
}

function getCoordinates(array) {
  let movements = getAllMovements(array);
  let coordinates = [];
  console.log("inside getCoordinates function...");

  let length = movements.length;

  let initialStep = [0, 0];
  initialStep[0] = movements[0][0];
  initialStep[1] = movements[0][1];
  coordinates.push(initialStep);
  let step = [];
  let i = 0;

  while (i + 1 < length) {
    step[0] = movements[i + 1][0] + coordinates[i][0];
    step[1] = movements[i + 1][1] + coordinates[i][1];
    newStep = [...step];
    coordinates.push(newStep);
    i++;
  }

  return coordinates;
}

let wire1 = getCoordinates(input1);
let wire2 = getCoordinates(input2);

// console.log("wire1:", wire1);
// console.log("wire2:", wire2);

function stringifyWire(wire) {
  let stringWire = [];
  console.log("inside stringify function...");
  wire.forEach(element => {
    stringWire.push(JSON.stringify(element));
  });
  return stringWire;
}

let stringWire1 = stringifyWire(wire1);
let stringWire2 = stringifyWire(wire2);

function findWireCross(wire1, wire2) {
  console.log("inside findWireCross function...");
  let lenghtWire2 = wire2.length;
  let lenghtWire1 = wire1.length;
  let y = 0;
  let x = 0;
  let crosses = [];
  while (x < lenghtWire1) {
    while (y < lenghtWire2) {
      if (wire1[x] === wire2[y]) crosses.push(wire1[x]);
      y++;
    }
    x++;
    y = 0;
  }
  return crosses;
}

function getShortestRoute(crosses) {
  console.log("inside getShortesRoute function...");
  let routes = [];
  crosses.forEach(element => {
    routes.push(
      Math.abs(JSON.parse(element)[0]) + Math.abs(JSON.parse(element)[1])
    );
  });
  console.log("returning routes...");

  return Math.min(...routes);
}

let allCrosses = findWireCross(stringWire1, stringWire2);
console.log(getShortestRoute(allCrosses));
