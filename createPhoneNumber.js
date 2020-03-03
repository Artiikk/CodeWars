function createPhoneNumber(numbers) {
  const prefix = numbers.slice(0, 3).join('')
  const mainPart = numbers.slice(3, 6).join('')
  const lastPart = numbers.slice(6).join('')
  return `(${prefix}) ${mainPart}-${lastPart}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))