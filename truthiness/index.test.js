const truthiness = require("./index");

test("-0 is falsy", () => {
  expect(truthiness(-0)).toBeFalsy();
});

test("1 is truthy", () => {
  expect(truthiness(1)).toBeTruthy();
});
