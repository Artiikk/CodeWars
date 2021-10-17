const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

function getMissingNumber(array) {
  for (let i = 0; i < array.length; i++) {
    const prevEl = array[i - 1];
    const currentEl = array[i];

    if (prevEl >= 0 && currentEl - prevEl !== 1) {
      return prevEl + 1;
    }
  }
}

console.log(getMissingNumber(arr));
