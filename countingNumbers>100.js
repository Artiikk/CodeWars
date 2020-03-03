const countNumbers = (...arr) => {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 100 && arr[i] % 5 === 0) {
        counter++;
      }
    }

    return arr.map(el => (el > 100 && el % 5 === 0) ? el = counter : el);
  }

  console.log(countNumbers(4, 115, 7, 195, 25, 106));