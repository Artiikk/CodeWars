const expressionMatter = (a,b,c) => Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);

console.log(expressionMatter(1, 1, 1));
console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(2, 1, 1));
console.log(expressionMatter(2, 2, 2));
console.log(expressionMatter(1, 3, 1));
