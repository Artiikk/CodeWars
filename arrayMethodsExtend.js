Array.prototype.square = function() { return this.map(el => el ** 2) }
Array.prototype.cube = function() { return this.map(el => el ** 3) }
Array.prototype.average = function() { return this.reduce((sum, current) => sum + current, 0) / this.length }
Array.prototype.sum = function() { return this.reduce((sum, current) => sum + current, 0) }
Array.prototype.even = function() { return this.filter(el => el % 2 === 0) }
Array.prototype.odd = function() { return this.filter(el => el % 2 !== 0) }

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].square())
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].cube())
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].average())
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].sum())
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].even())
