const countDigits = function(num) {
    const stringNumber = String(num);
    let divideNumber = 0;

    for (let i = 0; i <= stringNumber.length; i++) {
        const currentNumber = stringNumber[i];

        if (num % currentNumber === 0) {
            divideNumber += 1;
        }
    }

    return divideNumber;
};
