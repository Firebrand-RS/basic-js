const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const domainVariantList = domains.map((domain) => {
    const list = domain.split('.').reverse();
    const result = list.map((level, index) => {
      return '.' + list.slice(0, index + 1).join('.');
    });
    return result;
  }).flat();

  const resultObj = {};
  for (let level of domainVariantList) {
    resultObj[level] = resultObj[level] ? resultObj[level] + 1 : 1;
  }
  return resultObj;
}

module.exports = {
  getDNSStats
};
