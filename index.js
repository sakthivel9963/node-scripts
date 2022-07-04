const setTimeOut = async (milliSeconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`🚀 ~ file: index.js ~ line: 4 :`, { '': 2 });
      resolve();
    }, milliSeconds);
  });
};

const main = async () => {
  let condition = true;
  while (condition) {
    console.log(`🚀 ~ file: index.js ~ line: 13 :`, { '': 1 });
    await setTimeOut(2000);
  }
};

// main();
