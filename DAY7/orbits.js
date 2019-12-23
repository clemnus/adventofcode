const assert = require("assert");
const fs = require("fs");

const testInput = ["COM)A", "A)B", "A)C"];
const trueInput = fs
  .readFileSync("./input.txt", { encoding: "UTF-8" })
  .split("\n");

function parseInput(input) {
  const result = {};
  input.forEach(element => {
    const i = element.split(")");
    const center = i[0];
    const satelite = i[1];
    result[satelite] = center;
  });
  return result;
}

const testData = {
  A: "COM",
  B: "A",
  C: "A"
};

function getPlanetDistance(map, planet) {
  if (planet === "COM") return 0;
  return 1 + getPlanetDistance(map, map[planet]);
}

assert(getPlanetDistance(testData, "COM") == 0);
assert(getPlanetDistance(testData, "A") == 1);
assert(getPlanetDistance(testData, "B") == 2);

function getTotalOrbits(map) {
  let result = 0;
  for (planet in map) {
    result = result + getPlanetDistance(map, planet);
  }
  return result;
}

assert(getTotalOrbits(testData) == 5);

console.log(getTotalOrbits(parseInput(trueInput)));
