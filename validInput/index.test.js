const validInput = require("./index");

test("1 is a number, and should return true", () => {
  expect(validInput(1, "number")).toBeTruthy();
});

test("1 is not a string, and should throw an error", () => {
  expect(() => {
    validInput(1, "string");
  }).toThrow();
});
