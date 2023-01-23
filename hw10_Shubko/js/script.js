//1
// let i = 10;
// let result = ''
// while (i<=20){
//     result += i === 20 ? `${i}`:`${i}, ` 
//     i++
// }
// alert(result)


//2
// let squares = ''
// for(let i = 10; i<=20;i++){
//     squares += i === 20 ? `${i**2}`:`${i**2}, ` 
// }
// alert(squares)


//3
// let table = ''
// for(let i = 0; i<10;i++){
//     table += `7 *${i}  = ` + 7 * i + '\n'
// }
// alert(table)

//4
// let summ = null
// for(let i = 0; i<=15;i++){
//     summ += i
// }
// alert(`Сумма чисел от 1 до 15 = ${summ}`)

//5
// let multiplication = 1
// for(let i = 15; i<=35; i++){
//    multiplication *= i;
// }
// alert(`Сумма чисел от 15 до 35 = ` + BigInt(multiplication))

//6
// let averageSumm = 0
// let average = 0
// for(let i = 0; i<=500;i++){
//     averageSumm += i
//     if(i===500){
//      average = averageSumm / i;
//     }
// }
// alert(average)

//7
// let evenSumm = 0
// for (let i=30;i<=80;i++){
//     if(i % 2 === 0){
//         evenSumm += i;
//     }
// }
// alert(evenSumm)

//8
// let multiples = ''
// for(let i = 100; i<=200;i++){
//     if(i % 3 === 0 ){
//         multiples += i === 198 ? `${i}`:`${i}, ` 
//     }
// }
// alert(multiples)

//9
// const naturalNumber = 100
// let dividers = ''
// let pairDividers = ''
// let pairSumm = 0
// for(let i = 0;i <=naturalNumber;i++){
//     if(naturalNumber % i === 0){
//         dividers += i + ' '
//     }
// }
// alert(`Делители числа ${naturalNumber} = ${dividers})



//10
// const naturalNumber = 100
// let dividers = ''
// let pairDividers = ''
// let pairSumm = 0
// for(let i = 0;i <=naturalNumber;i++){
//     if(naturalNumber % i === 0){
//         dividers += i + ' '
//         if(naturalNumber % i === 0 && i % 2 === 0){
//             pairDividers +=i + ' ';
//         }
//     }
// }
// alert(`Делители числа ${naturalNumber} = ${dividers}\nЧетные Делители числа ${naturalNumber} = ${pairDividers}`)


//11
// const naturalNumber = 100
// let dividers = ''
// let pairDividers = ''
// let pairSumm = 0
// for(let i = 0;i <=naturalNumber;i++){
//     if(naturalNumber % i === 0){
//         dividers += i + ' '
//         if(naturalNumber % i === 0 && i % 2 === 0){
//             pairDividers +=i + ' ';
//             pairSumm += i
//         }
//     }
// }
// alert(`Делители числа ${naturalNumber} = ${dividers}\nЧетные Делители числа ${naturalNumber} = ${pairDividers}\nСумма четных Делителей числа = ${pairSumm}`)


//12
let multTable = ''
for(let i = 1; i <= 10; i++){
    for(let j = 0; j <= 10;j++){
        multTable += `${i} * ${j} = ` + i * j + '\n \n'
    }
}
alert(multTable)