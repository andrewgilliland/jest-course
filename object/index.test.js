const object = require("./index");

test("Returns an object with one and two keys", () => {
  expect(object()).toEqual({ one: 1, two: 2 });
});
