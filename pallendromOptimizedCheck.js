function pallendromCheck(str) {
  const strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
    const firstEl = strArr[i];
    const lastEl = strArr[strArr.length - i - 1];
    
    if (firstEl !== lastEl) {
      return false
    }
  }

  return true
}
