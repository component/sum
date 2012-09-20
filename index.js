
/**
 * Module dependencies.
 */

var toFunction = require('to-function');

/**
 * Sum the given `arr` with callback `fn(val, i)`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @return {Number}
 * @api public
 */

module.exports = function(arr, fn){
  var sum = 0;
  if (fn) {
    fn = toFunction(fn);
    for (var i = 0; i < arr.length; ++i) {
      sum += fn(arr[i], i);
    }
  } else {
    for (var i = 0; i < arr.length; ++i) {
      sum += arr[i];
    }
  }
  return sum;
};
