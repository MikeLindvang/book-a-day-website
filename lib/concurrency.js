export function pLimit(limit) {
  const queue = [];
  let active = 0;

  const next = () => {
    active--;
    if (queue.length) queue.shift()();
  };

  return fn => (...args) =>
    new Promise((resolve, reject) => {
      const run = () => {
        active++;
        Promise.resolve(fn(...args)).then(
          (val) => { resolve(val); next(); },
          (err) => { reject(err); next(); }
        );
      };
      if (active < limit) run();
      else queue.push(run);
    });
}
