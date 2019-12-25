function determineMovements(element) {
  let initial = [];
  let i = 0;
  let count = parseInt(element.charAt(1));
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

let wire1 = getCoordinates(["R8", "U5", "L5", "D3"]);
let wire2 = getCoordinates(["U7", "R6", "D4", "L4"]);

// console.log("wire1:", wire1);
// console.log("wire2:", wire2);

function stringifyWire(wire) {
  let stringWire = [];
  wire.forEach(element => {
    stringWire.push(JSON.stringify(element));
  });
  return stringWire;
}

let stringWire1 = stringifyWire(wire1);
let stringWire2 = stringifyWire(wire2);

function findWireCross(wire1, wire2) {
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

console.log(findWireCross(stringWire1, stringWire2));
