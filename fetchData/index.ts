const fetchData = (callback) => {
  setTimeout(() => {
    callback("peanut butter");
  }, 1000);
};

const fetchDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 1000);
  });
};

module.exports = fetchDataPromise;
