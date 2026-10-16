/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const {
    repeatTimes,
    separator = '+',
    addition = '',
    additionRepeatTimes,
    additionSeparator = '|',
  } = options;

  const strValue = String(str);
  const additionValue = String(addition);

  const additionPart = additionRepeatTimes
    ? Array(additionRepeatTimes).fill(additionValue).join(additionSeparator)
    : additionValue;

  const unit = strValue + additionPart;

  return repeatTimes
    ? Array(repeatTimes).fill(unit).join(separator)
    : unit;
}

module.exports = {
  repeater
};
