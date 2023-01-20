//if to switch case
let numOrStr = prompt('input number or string');
switch(numOrStr && numOrStr.trim() && String(+numOrStr)){
    case null:
        console.log('ви скасували');
        break;
    case "":
        console.log('Empty String');
        break;
    case "NaN":
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}