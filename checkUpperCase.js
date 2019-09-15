String.prototype.isUpperCase = function() {
  return this == this.toUpperCase();
}

'c'.isUpperCase() //false
'C'.isUpperCase() //true
