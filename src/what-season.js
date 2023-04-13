const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  try {
    if (arguments.length === 0) {
      return "Unable to determine the time of year!";
    }
    if (
      !(!isNaN(Date.parse(date)) &&
        !isNaN(Date.parse(date)) !== 0 &&
        !isNaN(date.getTime()) &&
        date instanceof Date
      )
    ) {
      throw new Error('Invalid date!');
    }
    const month = date.getMonth();
    if (month == 11 || month < 2) return 'winter';
    if (month < 5) return 'spring';
    if (month < 8) return 'summer';
    if (month < 11) return 'autumn';
  } catch {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
