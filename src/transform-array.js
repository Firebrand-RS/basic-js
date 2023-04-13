const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log('Массив: ' + arr);
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  const resultArray = [];
  let advanced = false;
  for (let i = 0; i < arr.length; i++) {;
    switch (arr[i]) {
      case '--double-next': i + 1 > arr.length - 1 ? '' : resultArray.push(arr[i + 1]);
      break;
      case '--double-prev': arr[i - 1] === undefined || advanced ? '' : resultArray.push(arr[i - 1]);
      break;
      case '--discard-next': i++; advanced = true;
      break;
      case '--discard-prev': advanced ? '' : resultArray.pop();
      break;
      default: resultArray.push(arr[i]);
      advanced = false;
    }
  }
  return resultArray;
}

module.exports = {
  transform
};
