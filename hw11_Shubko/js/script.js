//1
// let numbers = ''
// for(let i = 20; i <= 30; i+=0.5){
//     numbers += i + ' '
// }
// alert(numbers)


// //2
// const currencyRate = 27
// let result = ''
// for(let i = 10; i <= 100; i+=10){
//     i === 100 ? result += currencyRate * i + ' Доларів': result += currencyRate * i + ', '
// }
// alert(result)

//3
// const someNumber = prompt("Enter some number")
// let someSquares = ''
// for(let i = 1; i <= 100; i++ ){
//     if( i**2 < someNumber){
//         someSquares += i + ' '
//     }
// }
// alert(someSquares)

//4
// const someNumber = Number(prompt("Enter some number"))
// let simpleNumber =true;
// if(someNumber === 1){
//     alert("Not this one")
// }
// else if(someNumber>1){
//     for(i = 2; i < someNumber;i++){
//         if(someNumber % i === 0){
//             simpleNumber = false
//             break;
//         }
//         else{
//             simpleNumber = true
//         }
//     }

//     if(simpleNumber){
//         alert("Simple")
//     }
//     else{
//         alert("not simple")
//     }
// }
// else{
//     alert('Number less than 1')
// }
//5
const someNumberSecond = Number(prompt("Enter some number"))
const startNumber = 3;
let fromNumber = ''
for(let i=0; i<someNumberSecond;i++){
    if(startNumber**i === someNumberSecond && startNumber**i <= someNumberSecond){
        fromNumber +=`You get this number by ${startNumber}^${i} = ${someNumberSecond}`
        // break
    }
    // else{
    //   fromNumber = 'Sorry, you cant get that number'
    // }
    //   я не совсем понимаю почему с break выводит Sorry, you cant get that numberYou get this number by 3^4 = 81
}
alert(fromNumber)