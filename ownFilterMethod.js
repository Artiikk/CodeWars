function filter(array, callback) {
  if (!Array.isArray(array) || !array.length || typeof callback !== 'function') {
    return []
  }

  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    if (callback(element, i, array)) {
      result.push(element)
    }
  }
  return result;
}

console.log(filter([1, 2, 3], el => el > 1))

Array.prototype.myFilter = function(callback) { //eslint-disable-line
  if (!Array.isArray(this) || !this.length || typeof callback !== 'function') {
    return []
  }
  
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    
    if (callback(element, i, this)) {
      result.push(element);
    }
  }
  return result
}