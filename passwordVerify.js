function validate(password) {
  return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{6,}$/.test(password);
}

console.log(validate('djI38D55'))
//At least six characters long
//contains a lowercase letter
//contains an uppercase letter
//contains a number