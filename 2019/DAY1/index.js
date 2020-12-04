const fs = require("fs");

// 1969 => 966
// 100756 => 50346
let result = 0;
const input = fs.readFileSync("./input.txt", { encoding: "UTF-8" }).split("\n");

function fuelForMass(mass) {
  result = Math.floor(mass / 3) - 2;
  return result;
}
// console.log(fuelForMass(5));

function totalFuel(mass) {
  if (fuelForMass(mass) < 1) return 0;
  result = result + totalFuel(fuelForMass(mass));
  return result;
}
// console.log(totalFuel(100756));

const testInput = [1969, 100756];

function totalFuelNeeded(array) {
  array.forEach(e => {
    result = result + totalFuel(e);
  });
  return result;
}
console.log(totalFuelNeeded(input));
