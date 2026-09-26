const delayedPromise = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => resolve(value), delay);
  });

const randomDelay = value => {
  const delay = Math.floor(Math.random() * 4001) + 1000;

  return delayedPromise(value, delay);
};

const allPromises = [
  delayedPromise('Перше значення', 1200),
  delayedPromise('Друге значення', 500),
  delayedPromise('Третє значення', 2000),
  delayedPromise('Четверте значення', 800),
  delayedPromise('П’яте значення', 1500),
];

const racingPromises = [
  randomDelay('Швидкий учасник'),
  randomDelay('Другий учасник'),
  randomDelay('Третій учасник'),
  randomDelay('Четвертий учасник'),
  randomDelay('П’ятий учасник'),
];

if (typeof window !== 'undefined') {
  Promise.all(allPromises).then(results => {
    console.log('Результати Promise.all:', results);
  });

  Promise.race(racingPromises).then(result => {
    console.log('Результат Promise.race:', result);
  });
}

if (typeof module !== 'undefined') {
  module.exports = { delayedPromise, randomDelay };
}
