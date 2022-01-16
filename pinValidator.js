function validatePIN(pin) {
  const digitRegExp = /^\d+$/g;
  const isOnlyNumber = digitRegExp.test(pin)
  const isLengthValid = (pin.length === 4) || (pin.length === 6)

  return isOnlyNumber && isLengthValid;
}
