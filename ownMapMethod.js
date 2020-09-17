function map(array, callback) {
  if (!Array.isArray(array) || !array.length || typeof callback !== 'function') {
    return [];
  }

  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    result.push(callback(element, i, array))
  }
  return result
}

console.log(map([1, 2, 3], (el, i) => el ** i))

Array.prototype.myMap = function(callback) { //eslint-disable-line
  if (!Array.isArray(this) || !this.length || typeof callback !== 'function') {
    return []
  }
  
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    
    result.push(callback(element, i, this))
  }
  return result
}