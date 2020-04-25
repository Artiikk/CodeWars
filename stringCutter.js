// const inputStr = 'AAAABBBCCXYZDDDD'
function rle(str) {
  let curr = 1
  const newArr = []
  for (let i = 0; i < str.length; i++) {
    const element = str[i]
    const nextElement = str[i + 1]

    if (element === nextElement) {
      curr += 1
    } else {
      newArr.push(element)
      newArr.push(curr)
      curr = 1
    }
  }
  return newArr.filter(el => el !== 1).join('')
}
// console.log(rle(inputStr)) // 'A4B3C2XYZD4'