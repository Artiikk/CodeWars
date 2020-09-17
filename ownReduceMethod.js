function reduce(array, callback, initialValue) {
  if (!Array.isArray(array) || !array.length || typeof callback !== 'function') {
    return []
  }

  let hasInitialValue = initialValue !== undefined
  let value = hasInitialValue ? initialValue : array[0]

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    value = callback(value, element, i, array);
  }
  return value
}

console.log(reduce([1, 2, 3], (acc, el) => acc + el, 0))

Array.prototype.myReduce = function(callback) { //eslint-disable-line
  if (!Array.isArray(this) || !this.length || typeof callback !== 'function') {
    return []
  }
  
  let hasInitialValue = initialValue !== undefined
  let value = hasInitialValue ? initialValue : this[0]

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    value = callback(value, element, i, array);
  }
  return value
}
