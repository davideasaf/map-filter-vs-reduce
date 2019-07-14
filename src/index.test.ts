// /*
// 1. Create a collection of objects w/ simple id and name. The lendth is editable, but be careful
// with a length > 1000 as this script may become unusable with the large loop.
// */
// const collection = Array.from({ length: 100 }, (_, k) => ({
//   id: k + 1,
//   name: `name of ${k + 1}`
// }));
// /*
// 2. Run the filter and Map execution and collect start and end performance.now()
// timestamps to compare later
// */
// const filterAndMapTestStart = performance.now();
// const filterAndMapTestResult = collection.filter(c => c.id > 50).map(c => c.name);
// const filterAndMapTestEnd = performance.now();

// /*
// 3. Run the reduce execution and collect start and end performance.now()
// timestamps to compare later
// */
// const reduceStart = performance.now();
// const reduceResult = collection.reduce((acc, c, n) => {
//   if (c.id > 50) {
//     acc.push(c.name);
//   }
//   return acc;
// }, []);
// const reduceEnd = performance.now();

// /*
// 4. Print out number of milliseconds each took and print out winner
// */
// console.log(
//   'filterAndMap took ' + (filterAndMapTestEnd - filterAndMapTestStart) + ' milliseconds.'
// );
// console.log('Reduce took ' + (reduceEnd - reduceStart) + ' milliseconds.');
// console.log(
//   `The winner is ${
//     filterAndMapTestEnd - filterAndMapTestStart > reduceEnd - reduceStart
//       ? 'FilterAndMap'
//       : 'Reduce'
//   }!`
// );
// console.log('---------------------------------------------------------');

// /*
// Validate taht both results are the same
// */
// expect(filterAndMapTestResult).toEqual(reduceResult);
