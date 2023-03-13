const resolvePromise = async (promise) => {
  return promise
    .then((result) => {
      return {
        ok: true,
        result,
      };
    })
    .catch((error) => {
      return Promise.resolve({ ok: false, error });
    });
};

const promiseMethod = async (data) => {
  return new Promise((resolve, reject) => {
    data === 'ok'
      ? resolve('success')
      : reject(new Error('something went wrong'));
  });
};

const main = async () => {
  const { result, ok, error } = await resolvePromise(promiseMethod('ok'));
  console.log(`🚀 ~ file: async.js ~ line: 17 :`, { result });
  console.log(`🚀 ~ file: async.js ~ line: 17 :`, { ok });
  console.log(`🚀 ~ file: async.js ~ line: 17 :`, { error });
};

main();
