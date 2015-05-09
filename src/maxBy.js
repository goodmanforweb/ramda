var _createMaxMinBy = require('./internal/_createMaxMinBy');
var _curry2 = require('./internal/_curry2');
var _gt = require('./internal/_gt');


/**
 * Determines the largest of a list of items as determined by pairwise comparisons from the supplied comparator.
 * Note that this will return undefined if supplied an empty list.
 *
 * @func
 * @memberOf R
 * @category Math
 * @sig (a -> Number) -> [a] -> a
 * @param {Function} keyFn A comparator function for elements in the list
 * @param {Array} list A list of comparable elements
 * @return {*} The greatest element in the list. `undefined` if the list is empty.
 * @see R.max
 * @example
 *
 *      function cmp(obj) { return obj.x; }
 *      var a = {x: 1}, b = {x: 2}, c = {x: 3};
 *      R.maxBy(cmp, [a, b, c]); //=> {x: 3}
 */
module.exports = _curry2(_createMaxMinBy(_gt));
