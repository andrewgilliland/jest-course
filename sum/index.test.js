const sum = require("./index");

test("Adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Two plus two is four", () => {
  expect(sum(2, 2)).toBe(4);
});
