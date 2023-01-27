const arrLength = Number(prompt("Enter array length"))
const array = []
for(let i = 0; i<arrLength; i++){
    array[i] = Number(prompt(`Enter array item number ${i}` ))
}
console.log(array)
const sorted = array.sort((a, b) => {
    if (a>b) return 1;
    if(a == b) return 0;
    if(a<b) return -1;
})
console.log(sorted)
sorted.splice(1,3)
console.log(sorted)