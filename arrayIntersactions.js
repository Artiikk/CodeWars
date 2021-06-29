const input1 = [1, 2, 2, 1, 3]
const input2 = [2, 2]
// [2, 2]

const input3 = [4, 9, 5]
const input4 = [9, 4, 9, 8, 4]
// [4, 9]

const getIntersactions = (arr1, arr2) => {
  const repeatAmount1 = arr1.reduce((acc, item) => {
    item in acc ? (acc[item] = ++acc[item]) : (acc[item] = 1)
    return acc
  }, {})

  const newArr = []

  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i]

    if (element in repeatAmount1) {
      newArr.push(element)
      --repeatAmount1[element]

      if (repeatAmount1[element] === 0) {
        delete repeatAmount1[element]
      }
    }
  }

  return newArr
}

console.log(getIntersactions(input1, input2))
console.log(getIntersactions(input3, input4))