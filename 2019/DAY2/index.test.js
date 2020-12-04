const lab = require("./index");

describe("day2 exercise", () => {
  it("resetMemory - updated array with passed values for index 1 and 2", () => {
    const result = lab.resetMemory([1, 2, 3, 4], 8, 8);
    expect(result).toEqual([1, 8, 8, 4]);
  });

  it("returnAddressZero - should return index 0 for passed array, noun and verb once computed", () => {
    const result = lab.returnAddressZero([1, 0, 0, 0, 99], 0, 0);
    expect(result).toBe(2);
  });
});
