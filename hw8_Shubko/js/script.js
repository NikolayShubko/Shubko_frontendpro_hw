//User portrtait
let city = prompt("В якому місті ви живете?")
const birthYear = prompt("Ваш рік народження?")
let sports = prompt("Ваш улюблений вид спорту?")
const currentYear = 2023;
const age = currentYear - birthYear;
switch(city){
    case 'київ':
    case 'Київ':
        city = "Ти живеш у столиці України"
        break;
    case 'вашингтон':
    case 'Вашингтон':
        city = "Ти живеш у столиці США"
        break;
    case 'лондон':
    case 'Лондон':
        city = "Ти живеш у столиці Англії"
        break;
    default:
        city = `Ти живеш в м. ${city}`
}
switch(sports){
    case 'Бокс':
    case 'бокс':
        sports = "Круто! Хочеш стати Майком Тайсоном?"
        break;
    case 'Футбол':
    case 'футбол':
        sports = "Круто! Хочеш стати Мессі?"
        break;
    case 'Хокей':
    case 'хокей':
        sports = "Круто! Хочеш стати Уэйн Гретцки?"
        break;
    default:
        sports = `Твій улюбленний вид спорту це ${sports}`
}
alert(`${city}, тобі ${age} роки(ів). ${sports}`)