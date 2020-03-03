<input type="text" onchange="calculator.calculate(this)" />


class Calculator {
    constructor() {
        this.methods = {
            "-": (a, b) => a - b,
            "+": (a, b) => a + b
        };
    }

    calculate = str => {
        let split = str.value.split(" "),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return console.log(this.methods[op](a, b));
    };

    addMethod = (name, func) => (this.methods[name] = func);
}
const calculator = new Calculator();