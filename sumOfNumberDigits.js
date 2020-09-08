function sumNumber(number) {
  const strArr = [...String(number)];
  return strArr.reduce((sum, el) => sum + Number(el), 0);
}

console.log(sumNumber(111)); /// 3