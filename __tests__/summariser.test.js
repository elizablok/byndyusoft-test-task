import sum2MinNums from '../src/summariser.js';
import {
  errorMessage, notArrayErr, smallArrayErr, bigArrayErr, notNumOrInfiniteErr,
} from '../src/summariser.js';
import bigArray from '../__fixtures__/bigArray.js';

const normal = [
  [[4, -2, 8, 5], 2], [[-6, 7], 1],
];

const borderline = [
  [42, `${notArrayErr} ${errorMessage}`], [[], `${smallArrayErr} ${errorMessage}`], [[5], `${smallArrayErr} ${errorMessage}`],
  [bigArray, `${bigArrayErr} ${errorMessage}`], [[3, 1 / 0], `${notNumOrInfiniteErr} ${errorMessage}`], [['69', 9], `${notNumOrInfiniteErr} ${errorMessage}`],
];

test.each(normal)('normal cases', (argument, expected) => {
  expect(sum2MinNums(argument)).toBe(expected);
});

test.each(borderline)('borderline cases', (argument, expected) => {
  expect(sum2MinNums(argument)).toStrictEqual(new Error(expected));
});
