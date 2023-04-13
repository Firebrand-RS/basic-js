const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const unicChars = Array.from(new Set(s1));
  const st1Chars = s1.split('');
  const st2Chars = s2.split('');

  return unicChars.reduce((sum, value) => {
    const st1Sum = st1Chars.filter((item) => item === value).length;
    const st2Sum = st2Chars.filter((item) => item === value).length;
    const result = st1Sum < st2Sum ? st1Sum : st2Sum;
    return sum + result;
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};
