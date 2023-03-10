function isValid(strValue) {
  if (strValue.length % 2 !== 0) return false;

  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"]
  ]);

  for (let i = 0; i < strValue.length; i++) {
    if (map.has(strValue[i])) {
      stack.push(map.get(strValue[i]));
    } else if (strValue[i] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"));
