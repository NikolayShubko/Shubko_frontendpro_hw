//ask user 2 numbers and do simple calculations
let firstNumber = prompt("Enter first number")
let secondNumber = prompt("Enter second number")
let sum = +firstNumber + +secondNumber
let subtraction = firstNumber - secondNumber
let division=firstNumber / secondNumber
let multiplication=firstNumber * secondNumber
alert(`${firstNumber} + ${secondNumber} = ${sum}`)
alert(`${firstNumber} - ${secondNumber} = ${subtraction}`)
alert(`${firstNumber} / ${secondNumber} = ${division}`)
alert(`${firstNumber} * ${secondNumber} = ${multiplication}`)