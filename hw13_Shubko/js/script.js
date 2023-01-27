const numbersArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
const filteredPos = numbersArray.filter( number => number>0)
const filteredNeg = numbersArray.filter( number => number<0)
//1
const summPos = filteredPos.reduce((summ,number) =>(summ+number))
console.log(`Суммма позитивних позитивних елементів ${summPos}`)
console.log(`Кількість позитивних елементів${filteredPos.length}`)
//2
const minValue = numbersArray.reduce((a,b)=> Math.min(a,b))
const minIndex = numbersArray.findIndex(number => number === minValue)
console.log(`Мінімальний елемент та його індекс ${minValue}, ${minIndex}`)
//3
const maxValue = numbersArray.reduce((a,b)=> Math.max(a,b))
const maxIndex = numbersArray.findIndex(number => number === maxValue)
console.log(`Максимальний елемент та його індекс ${maxValue},${maxIndex}`)
//4
console.log(`Кількість негативних елементів ${filteredNeg.length}`)
//5
const oddPos = filteredPos.filter(number => number%2!==0)
console.log(`Кількість непарних позитивних елементів. ${oddPos.length}`)
//6
const evenPos = filteredPos.filter(number => number%2===0)
console.log(`Кількість парних позитивних елементів.${evenPos.length}`)
//7
const summPosEven = evenPos.reduce((summ,number) => summ + number)
console.log(`Сума парних позитивних елементів. ${summPosEven}`)
//8
const summPosOdd = oddPos.reduce((summ,number) => summ + number)
console.log(`Сума непарних позитивних елементів. ${summPosOdd}`)
//9
const multiplPos = filteredPos.reduce((mult,number) => mult*number)
console.log(`Добуток позитивних елементів. ${multiplPos}`)
//10
let max=0;
let maxI=0
for(let i=0;i<numbersArray.length;i++){
    if(numbersArray[i]>max){
        max = numbersArray[i]
        numbersArray[maxI] = 0
        maxI= i;
    }
    else{
        numbersArray[i] = 0
    }
}
console.log(`Найбільший серед елементів масиву, інші обнулити. ${numbersArray}`)