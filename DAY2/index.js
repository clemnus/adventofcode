let testInput = [2, 3, 0, 3, 99];
// 1,0,0,0,99 becomes 2,0,0,0,99 (1 + 1 = 2)
// 2,3,0,3,99 becomes 2,3,0,6,99 (3 * 2 = 6)
// 2,4,4,5,99,0 becomes 2,4,4,5,99,9801 (99 * 99 = 9801)
// 1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99

const input = [
  1,
  0,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  1,
  9,
  19,
  1,
  10,
  19,
  23,
  2,
  9,
  23,
  27,
  1,
  6,
  27,
  31,
  2,
  31,
  9,
  35,
  1,
  5,
  35,
  39,
  1,
  10,
  39,
  43,
  1,
  10,
  43,
  47,
  2,
  13,
  47,
  51,
  1,
  10,
  51,
  55,
  2,
  55,
  10,
  59,
  1,
  9,
  59,
  63,
  2,
  6,
  63,
  67,
  1,
  5,
  67,
  71,
  1,
  71,
  5,
  75,
  1,
  5,
  75,
  79,
  2,
  79,
  13,
  83,
  1,
  83,
  5,
  87,
  2,
  6,
  87,
  91,
  1,
  5,
  91,
  95,
  1,
  95,
  9,
  99,
  1,
  99,
  6,
  103,
  1,
  103,
  13,
  107,
  1,
  107,
  5,
  111,
  2,
  111,
  13,
  115,
  1,
  115,
  6,
  119,
  1,
  6,
  119,
  123,
  2,
  123,
  13,
  127,
  1,
  10,
  127,
  131,
  1,
  131,
  2,
  135,
  1,
  135,
  5,
  0,
  99,
  2,
  14,
  0,
  0
];

class InitialArray {
  constructor(
    array = [
      1,
      0,
      0,
      3,
      1,
      1,
      2,
      3,
      1,
      3,
      4,
      3,
      1,
      5,
      0,
      3,
      2,
      1,
      9,
      19,
      1,
      10,
      19,
      23,
      2,
      9,
      23,
      27,
      1,
      6,
      27,
      31,
      2,
      31,
      9,
      35,
      1,
      5,
      35,
      39,
      1,
      10,
      39,
      43,
      1,
      10,
      43,
      47,
      2,
      13,
      47,
      51,
      1,
      10,
      51,
      55,
      2,
      55,
      10,
      59,
      1,
      9,
      59,
      63,
      2,
      6,
      63,
      67,
      1,
      5,
      67,
      71,
      1,
      71,
      5,
      75,
      1,
      5,
      75,
      79,
      2,
      79,
      13,
      83,
      1,
      83,
      5,
      87,
      2,
      6,
      87,
      91,
      1,
      5,
      91,
      95,
      1,
      95,
      9,
      99,
      1,
      99,
      6,
      103,
      1,
      103,
      13,
      107,
      1,
      107,
      5,
      111,
      2,
      111,
      13,
      115,
      1,
      115,
      6,
      119,
      1,
      6,
      119,
      123,
      2,
      123,
      13,
      127,
      1,
      10,
      127,
      131,
      1,
      131,
      2,
      135,
      1,
      135,
      5,
      0,
      99,
      2,
      14,
      0,
      0
    ]
  ) {
    this.array = array;
  }
}

function resetMemory(array, noun, verb) {
  array[1] = noun;
  array[2] = verb;
  // console.log("resetmemory", array);
  return array;
}

function computeIntcode(opcode, array) {
  // console.log("starting compute intcode", array);
  if (array[opcode + 0] == 1) {
    array[array[opcode + 3]] =
      array[array[opcode + 1]] + array[array[opcode + 2]];
    // console.log("compute intcode exit because opcode = 1", array);
    return array;
  } else if (array[opcode + 0] == 2) {
    array[array[opcode + 3]] =
      array[array[opcode + 1]] * array[array[opcode + 2]];
    // console.log("compute intcode exit because opcode = 2", array);
    return array;
  } else if (array[opcode + 0] == 99) {
    // console.log("compute intcode exit because opcode = 99", array);
    return array;
  } else return "ERROR";
}

function loopOpcodes(array) {
  // console.log("starting loopOpCodes", array);
  let intcodeNumber = Math.ceil(array.length / 4) - 1;
  let opcode = 0;
  let i = 0;
  while (i <= intcodeNumber) {
    opcode = i * 4;
    // console.log("inside looOpcode loop", array);
    computeIntcode(opcode, array);
    i++;
  }
  return array[0];
}

function returnAddressZero(array, noun, verb) {
  // console.log("starting returnAdresseZero", array);
  return loopOpcodes(resetMemory(array, noun, verb));
}

function testNounVerbs(noun, verb) {
  console.log("starting looking...");
  while (verb < 100) {
    while (noun < 100) {
      let newArray = new InitialArray();
      // console.log([x, y]);
      let result = returnAddressZero(newArray.array, noun, verb);
      // console.log(result);
      if (result === 19690720) {
        return console.log(
          "matching noun and verbs :",
          [noun, verb],
          "so solution is :",
          noun * 100 + verb
        );
      } else {
        noun++;
      }
    }
    verb++;
    noun = 0;
  }
  console.log("cannot find");
}

testNounVerbs(0, 0);

module.exports = {
  resetMemory: resetMemory,
  returnAddressZero: returnAddressZero
};
