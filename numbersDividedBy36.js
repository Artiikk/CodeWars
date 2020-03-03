const countNumbers = (number) => {
    const arr = [];

    for (let i = 1; i < number; i++) {
    for (let j = 1; j < i; j++) {
        if ((i * j) % 36 === 0) arr.push(i, j);
    }
    }
    return arr;
}

console.log(countNumbers(100));