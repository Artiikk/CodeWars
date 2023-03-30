function plusOne(digits) {
    const numberFormat = BigInt(digits.join(''));
    const incrementedNumber = numberFormat + BigInt(1);

    return String(incrementedNumber).split('').map(digit => Number(digit));
};


console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
