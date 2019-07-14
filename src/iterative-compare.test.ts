// CONSTANTS
const COLLECTION_LENGTH = 1000; // size of collection the loops that filter+map and reduce will use
const TEST_ITERATIONS = 100; // size of test case.

interface ISampleObject {
  id: number;
  name: string;
}

const runFilterAndMapTest = (collection: ISampleObject[]): number => {
  const filterAndMapTestStart = performance.now();
  collection.filter(c => c.id > 50).map(c => c.name);
  const filterAndMapTestEnd = performance.now();
  return filterAndMapTestEnd - filterAndMapTestStart;
};

const runReduceTest = (collection: ISampleObject[]): number => {
  const reduceStart = performance.now();
  collection.reduce((acc, c, n) => {
    if (c.id > 50) {
      acc.push(c.name);
    }
    return acc;
  }, []);
  const reduceEnd = performance.now();
  return reduceEnd - reduceStart;
};

let filterAndMapWinCount = 0;
console.log('for loop');
for (let i = 0; i <= TEST_ITERATIONS; i++) {
  console.log('in for loop');
  const collection = Array.from({ length: COLLECTION_LENGTH }, (_, k) => ({
    id: k + 1,
    name: `name of ${k + 1}`
  }));

  const filterAndMapTime = runFilterAndMapTest(collection);
  const reduceTime = runReduceTest(collection);
  console.log('filterAndMap took ' + filterAndMapTime + ' milliseconds.');
  console.log('Reduce took ' + reduceTime + ' milliseconds.');
  console.log(`The winner is ${filterAndMapTime > reduceTime ? 'FilterAndMap' : 'Reduce'}!`);
  console.log('---------------------------------------------------------');

  if (filterAndMapTime < reduceTime) {
    filterAndMapWinCount++;
  }
}

console.log(`AVG filterAndMap % win rate: ${(filterAndMapWinCount / TEST_ITERATIONS) * 100}`);
console.log(
  `AVG Reduce % win rate: ${((TEST_ITERATIONS - filterAndMapWinCount) / TEST_ITERATIONS) * 100}`
);
