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
  console.log("movement:", movements);

  let length = movements.length;

  let initialStep = { x: 0, y: 0 };
  initialStep.x = movements[0][0];
  initialStep.y = movements[0][1];
  coordinates.push(initialStep);
  let step = [];
  let i = 0;

  while (i + 1 < length) {
    step.x = movements[i + 1][0] + coordinates[i].x;
    step.y = movements[i + 1][1] + coordinates[i].y;
    newStep = { ...step };
    coordinates.push(newStep);
    i++;
  }

  return coordinates;
}

console.log(getCoordinates(["U1", "R3"]));

//       [ [ 0, 1 ], [ 1, 0 ], [ 1, 0 ], [ 1, 0 ] ]
//       [ [ 0, 1 ], [ 1, 1 ], [ 2, 1 ], [ 3, 1 ] ]

//       [ [ 0, 1 ] ]
//       [ [ 0, 1 ], [ 1, 1 ]
//       [ [ 0, 1 ], [ 1, 1 ], [ 2, 1 ]
//       [ [ 0, 1 ], [ 1, 1 ], [ 2, 1 ], [ 3, 1 ] ]
