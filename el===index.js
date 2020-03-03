function indexEqualsValue(array) {
  let found;
  for (let i = 0; i < array.length; i++) {
    const current = array[i]
    
    if (current === i) {
      found = current
      break
    }
  }

  return (found || found === 0) ? found : -1
}
//6ms



// const indexEqualsValue = (array) => {
//   const found = array.find((el, index) => el === index)
//   if (found || found === 0) return found
//   else return -1
// }
//2,5s

console.log(indexEqualsValue([-8, 0, 2, 5]))