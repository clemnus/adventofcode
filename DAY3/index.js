// CABLE TEST: R1
// CABLE1: R8,U5,L5,D3
// CABLE2: U7,R6,D4,L4

function createCoordinate(element) {
  let position = [0, 0];

  if (element[0].charAt(0) == "R")
    position[0] = position[0] + parseInt(element[0].charAt(1));
  // if (element[0].charAt(0) == "L")
  //   position[0] = position[0] - parseInt(element[0].charAt(1));
  // if (element[0].charAt(0) == "U")
  //   position[1] = position[1] + parseInt(element[0].charAt(1));
  // if (element[0].charAt(0) == "D")
  //   position[1] = position[1] - parseInt(element[0].charAt(1));

  return position;
}

function createAllCoordinates(array) {
  let positions = [];
  array.forEach(element => {
    positions.push(createCoordinate(element));
  });
  return console.log(positions);
}

// createAllCoordinates(["U2", "R4"]);
console.log(createCoordinate("R5"));
