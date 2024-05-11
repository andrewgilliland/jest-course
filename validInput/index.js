const validInput = (input, inputType) => {
  if (typeof input !== inputType) {
    throw new Error("Input is invalid");
  } else {
    return "Input is valid";
  }
};

module.exports = validInput;
