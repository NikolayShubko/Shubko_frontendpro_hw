//calculator
const calculation = prompt("Which calculation you need? (add, sub, mult, div)")
const firstNumber = Number(prompt("Enter first number"))
const secondNumber = Number(prompt("Enter second number"))
switch(calculation){
    case 'add':
        const summ = firstNumber + secondNumber
        alert(`${firstNumber} + ${secondNumber} = ${summ}`)
        break;
    case 'sub':
        const subtraction = firstNumber - secondNumber
        alert(`${firstNumber} - ${secondNumber} = ${subtraction}`)
        break;
    case 'mult':
        const multiplication = firstNumber * secondNumber
        alert(`${firstNumber} * ${secondNumber} = ${multiplication}`)
        break;
    case 'div':
        const division = firstNumber / secondNumber
        alert(`${firstNumber} / ${secondNumber} = ${division}`)
        break;
    default:
        alert("Something wrong happened")
        break;
}