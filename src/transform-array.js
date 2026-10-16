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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let discardedNext = false;

  for (let i = 0; i<arr.length; i++) {
    const item = arr[i];

    if(item === '--discard-next') {
      if (i + 1 < arr.length) i++;
      discardedNext = true;
    } else if (item === '--discard-prev') {
      if (!discardedNext) result.pop();
      discardedNext = false;
    } else if (item === '--double-next') {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
        result.push(arr[i + 1]);
        i++;}
      discardedNext = false;
    } else if (item === '--double-prev') {
      if (!discardedNext && result.length > 0) {
        result.push(result[result.length - 1]);
      }
      discardedNext = false;
    } else {
      result.push(item);
      discardedNext = false;
    }
  }
  return result;
}

module.exports = {
  transform
};
