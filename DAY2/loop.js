// function loop(x, y) {
//   while (x < 3) {
//     while (y < 3) {
//       console.log(x, y);
//       y++;
//     }
//     x++;
//     y = 0;
//   }
// }

// loop(0, 0);

class InitialArray {
  constructor(array = [1, 2, 3, 4]) {
    this.array = array;
  }
}

const array = new InitialArray();

console.log(array.array);
