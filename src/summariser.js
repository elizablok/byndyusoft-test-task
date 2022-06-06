export const errorMessage = `Type in an array containing up to 100 finite numbers but a minimum of 2.`;
export const [notArrayErr, smallArrayErr, bigArrayErr, notNumOrInfiniteErr] = [`It's not an array.`, `The array is empty or doesn't have enough numbers.`,
  `The array is too big.`, `The array includes non-numeric data or infinite numbers.`];

function sum2MinNums(nums) {
  if (!Array.isArray(nums)) {
    return new Error(`${notArrayErr} ${errorMessage}`);
  }

  if (nums.length < 2) {
    return new Error(`${smallArrayErr} ${errorMessage}`);
  }

  if (nums.length > 100) {
    return new Error(`${bigArrayErr} ${errorMessage}`);
  }

  if (nums.filter((num) => typeof num === 'number' && Number.isFinite(num) === true).length !== nums.length) {
    return new Error(`${notNumOrInfiniteErr} ${errorMessage}`);
  }

  const [firstNum, secondNum] = nums.slice().sort((a, b) => a - b);
  return firstNum + secondNum;
}

export default sum2MinNums;
