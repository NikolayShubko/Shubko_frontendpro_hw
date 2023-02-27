class SuperMath {
  operations = ["+", "-", "/", "*", "%"];
  obj = { X: 12, Y: 3, znak: "/" };
  check(obj) {
    const { X, Y, znak } = obj;
    if (this.operations.includes(znak)) {
      const askUser = prompt(
        `Do calculations with this numbers? ${X}, ${Y}, ${znak}`
      );
      if (askUser === null) {
        this.input();
      } else {
        const result = this.calculate(X, Y, znak);
        console.log(`${X} ${znak} ${Y} = ${result}`);
      }
    } else {
      console.log("Enter Valid Znak");
      this.input();
    }
  }
  input() {
    const X = Number(prompt("Enter first number"));
    const Y = Number(prompt("Enter second number"));
    const znak = prompt("Enter znak");
    this.check({ X, Y, znak });
  }
  calculate(X, Y, znak) {
    switch (znak) {
      case "/":
        return X / Y;
      case "*":
        return X * Y;
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "%":
        return X % Y;
      default:
        return console.log("something wrong");
    }
  }
}
const p = new SuperMath();
const obj = {
  X: 12,
  Y: 3,
  znak: "/",
};
p.check(obj);
