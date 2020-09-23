function createBase(number) {
  return (nextNumber) => {
    return number + nextNumber;
  };
}

const adder = createBase(6);
console.log(adder(2))
console.log(adder(10))
