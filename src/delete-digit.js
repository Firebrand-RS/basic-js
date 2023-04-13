const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const charValues = n.toString().split('');
  const variants = charValues.map((char) => {
    const clone = charValues.slice();
    clone.splice(charValues.indexOf(char), 1);
    return Number(clone.join(''));
  });
  return Math.max(...variants);
}

module.exports = {
  deleteDigit
};
