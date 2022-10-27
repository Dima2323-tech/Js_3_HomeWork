//const arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
// 1)Створити функцію яка отримує массив і вибирає з нього всі парні числа і розміщує в новому масиві. Функція повина повертати массив з парними номерами.

const arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10 ];

function getRandomNumbers(){
    let newArray = [];
    console.log(arrRandomNumbers , "Не сортированые числа")
    for (let i = 0 ; i < arrRandomNumbers.length ; i++){
        if ((arrRandomNumbers[i] % 2) === 0){
            newArray.push(arrRandomNumbers[i])
        }
    }
    return newArray  + ' Cортированые Числа';
}

console.log(getRandomNumbers())



//2)Створити функцію яка заповнює глобальну змінну непарними числами, а потім сортує їх в порядку зростання.
function getnumbers(){
    let array = []
    let newArray = [];
    for (i = 0; i < 5; i++){
        let newArrayValue = parseInt(prompt('Введите не парные числа'))
        if ((newArrayValue % 2) == 0){
            alert('Вводите только не парные числа')
            newArrayValue = false
            console.log("В массив были добавленые парные числа , которые приняли значение false")
        }
        newArray.push(newArrayValue);
        newArray.sort(function (a , b){
            return a - b;
        });
        array.push(newArrayValue);

    }
    console.log(array , "Не отсортированый массив")
    console.log(newArray , " Отсортированый массив");
}

console.log(getnumbers())

// 3)Створити функцію яка перемножає всі значення массиву на 2 і записує їх в новий массив який повертає

function multiplicationNumbers(){
    let array = [];
    let newArray = [];
    for(i = 0; i < 10; i++){
        let newArrayValue = parseInt(prompt("Введите числа массива"));
        let multi = newArrayValue * 2;
        array.push(newArrayValue)
        newArray.push(multi)

    }

    return array + "   " + newArray;


}

console.log(multiplicationNumbers())

//4)Створити функції дій калькулятора (додавання, ділення, множення, віднімання).
// При введені операції викликати ту чи іншу функцію з отриманими данними ( для вирішення можна викорисатти if або switch)

let firstValue = parseInt(prompt("Введите первое число"))
let operatio = prompt("Введите знак операции")
let secondValue = parseInt(prompt("Введите второе число"))

function sum(){
    if(operatio == '+'){
        console.log(firstValue , "+" , secondValue , "=" , parseInt(firstValue + secondValue))
    }
}
function subt(){
    if(operatio == '-'){
        console.log(firstValue , "-" , secondValue , "=" , firstValue - secondValue)
    }
}
function multi(){
    if(operatio == '*'){
        console.log(firstValue , "*" , secondValue , "=" , firstValue * secondValue)
    }
}
function divi(){
    if(operatio == '/' && secondValue == 0){
        console.log('Делить на ноль нельзя')
    }
    else {
        console.log(firstValue , "/" , secondValue , "=" , firstValue / secondValue)
    }
}

switch (operatio){
    case "+":
        console.log(sum())
        break;
    case "-":
        console.log(subt())
        break;
    case "*":
        console.log(multi())
        break;
    case "/":
        console.log(divi())
        break;
}

//const boolArr = ['aaa', true, 'ccc', false, 'false']
// 5) створити функцію яка видаляє всі boolean значення з массиву і повертає массив тільки з стрінгами

const boolArr = ['aaa', true, 'ccc', false, 'false']

function del() {
    console.log(boolArr)
    for (i = 0; i < 1; i++) {
        if (boolArr[i] != true && boolArr[i] != false) {
            boolArr.splice(1 , 1)
            boolArr.splice(2,1)
        }
        console.log(boolArr)
    }
}

console.log(del())


// const smile = [':)', '=)',':)', '=)',':)', '=)'];
// // 6) створити функцію яка замінює в массиві =) на ;)

const smile = [':)', '=)',':)', '=)',':)', '=)'];

function replacement() {

    for (i = 0; i < 2; i++) {
        if (smile[i] == "=)") {
            smile.splice(1,1 ,';)' )
            smile.splice(3,1 ,';)' )
            smile.splice(5,1 ,';)' )
        }
        console.log(smile)
    }
}
console.log(replacement())

//const animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
// 7) створити функцію яка отримує аргумент, якщо це 'last' то функція поміщає останній елемент массиву в новий массив і видаляє останній елемент массиву,
// якщо аргумент 'first' то також записує перший елемент массиву до нового массиву і видаляє перший елемент з поточного

const animalsArr = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];

let firstLast = prompt("Введите значение first или last")
let newArr = [];

function GetAnimal(){
    console.log(animalsArr , "Не изменёный массив")
    if (firstLast == "first"){
        newArr.push(animalsArr.shift())
        console.log(animalsArr , "Изменёный массив без первого значения")
    }
    else if(firstLast == 'last'){
        newArr.push(animalsArr.pop())
        console.log(animalsArr , "Изменёный массив без последнего значения")
    }
    console.log(newArr , "Отделённое значение массива")
}

GetAnimal(animalsArr , firstLast)