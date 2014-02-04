
/**
 * Module dependencies.
 */

var toFunction = require('to-function');

/**
 * Sum the given `arr` with callback `fn(val, i)`.
 *
 * @param {Array|Object} arr
 * @param {Function} fn
 * @return {Number}
 * @api public
 */

module.exports = function(arr, fn){
  var sum = 0;
  var len = arr.length
  if (fn) {
    if (typeof fn != 'function') fn = toFunction(fn);
    // array
    if (len === +len) {
      for (var key = 0; key < len; ++key) {
        sum += fn(arr[key], key);
      }
    } else {
      for (var key in arr) {
        sum += fn(arr[key], key);
      }
    }
  } else {
    // array
    if (len === +len) {
      for (var key = 0; key < len; ++key) {
        sum += arr[key]
      }
    } else {
      for (var key in arr) {
        sum += arr[key]
      }
    }
  }
  return sum;
};
