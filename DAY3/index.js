// CABLE TEST: R1
// CABLE1: R8,U5,L5,D3
// CABLE2: U7,R6,D4,L4

function createMovement(element) {
  let movement = [0, 0];

  if (element.charAt(0) == "R")
    movement[0] = movement[0] + parseInt(element.charAt(1));
  if (element.charAt(0) == "L")
    movement[0] = movement[0] - parseInt(element.charAt(1));
  if (element.charAt(0) == "U")
    movement[1] = movement[1] + parseInt(element.charAt(1));
  if (element.charAt(0) == "D")
    movement[1] = movement[1] - parseInt(element.charAt(1));

  return movement;
}

function createAllMovements(array) {
  let movements = [];

  array.forEach(element => {
    movements.push(createMovement(element));
  });

  return movements;
}

function getAllCoordinates(array) {
  let movements = createAllMovements(array);
  let length = movements.length;
  let i = 0;

  while (i + 1 < length) {
    movements[i + 1][0] = movements[i + 1][0] + movements[i][0];
    movements[i + 1][1] = movements[i + 1][1] + movements[i][1];
    i++;
  }

  return movements;
}

console.log(getAllCoordinates(["U2", "R4", "D1"]));
