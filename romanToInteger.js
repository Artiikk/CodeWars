/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (romanString) => {
  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let resultNumber = 0;

  for (let i = 0; i < romanString.length; i++) {
    const currElement = romanString[i];
    const nextElement = romanString[i + 1];

    const currentStr = romanToIntMap[currElement];
    const nextStr = romanToIntMap[nextElement];

    if (currentStr < nextStr) {
        resultNumber += nextStr - currentStr;
        i++;
    } else {
        resultNumber += currentStr;
    }
  }

  return resultNumber;
};

