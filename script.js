// // //const arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
// // // 1)Створити функцію яка отримує массив і вибирає з нього всі парні числа і розміщує в новому масиві. Функція повина повертати массив з парними номерами.

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


//
// // //2)Створити функцію яка заповнює глобальну змінну непарними числами, а потім сортує їх в порядку зростання.
// // const arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10 ];
//
function getnumbers() {
    let newArrayNum = [];
    for (i = 0; i < arrRandomNumbers.length; i++) {
        if (arrRandomNumbers[i] % 2) {
            newArrayNum.push(arrRandomNumbers[i]);
        }
     }
        newArrayNum.sort(function (a, b) {
            return a - b;
        });

        console.log(arrRandomNumbers, "Не отсортированый массив")
        console.log(newArrayNum, " Отсортированый массив");

}
console.log(getnumbers())
// // // 3)Створити функцію яка перемножає всі значення массиву на 2 і записує їх в новий массив який повертає
// // const arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
    function multiplicationNumbers() {
        let array = [];
        let newArray = [];
        for (i = 0; i < arrRandomNumbers.length; i++) {

            let multi = arrRandomNumbers[i] * 2;
            array.push(arrRandomNumbers[i])
            newArray.push(multi)

            array.sort(function (a, b) {
                return a - b;
            });
            newArray.sort(function (a, b) {
                return a - b;
            });
        }

        return array + "   " + newArray;


    }

    console.log(multiplicationNumbers())

// // //4)Створити функції дій калькулятора (додавання, ділення, множення, віднімання).
// // // При введені операції викликати ту чи іншу функцію з отриманими данними ( для вирішення можна викорисатти if або switch)
//
    let firstValue = parseInt(prompt("Введите первое число"))
    let operatio = prompt("Введите знак операции")
    let secondValue = parseInt(prompt("Введите второе число"))

    function sum() {
        if (operatio == '+') {
            console.log(firstValue, "+", secondValue, "=", parseInt(firstValue + secondValue))
        }
    }

    function subt() {
        if (operatio == '-') {
            console.log(firstValue, "-", secondValue, "=", firstValue - secondValue)
        }
    }

    function multi() {
        if (operatio == '*') {
            console.log(firstValue, "*", secondValue, "=", firstValue * secondValue)
        }
    }

    function divi() {
        if (operatio == '/' && secondValue == 0) {
            console.log('Делить на ноль нельзя')
        } else {
            console.log(firstValue, "/", secondValue, "=", firstValue / secondValue)
        }
    }

    switch (operatio) {
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

// // //const boolArr = ['aaa', true, 'ccc', false, 'false']
// // // 5) створити функцію яка видаляє всі boolean значення з массиву і повертає массив тільки з стрінгами

    const boolArr = ['aaa', true, 'ccc', false, 'false']

    function del() {
        console.log(boolArr)
        for (i = 0; i < boolArr.length; i++) {
            if (boolArr[i] == false || boolArr[i] == true) {
                boolArr.splice(boolArr[i] = i, 1)
            }
            console.log(boolArr)
        }

        console.log(boolArr[i])
    }

    console.log(del())


// // // const smile = [':)', '=)',':)', '=)',':)', '=)'];
// // // // 6) створити функцію яка замінює в массиві =) на ;)

    const smile = [':)', '=)', ':)', '=)', ':)', '=)'];

    function replacement() {

        for (i = 0; i < smile.length; i++) {
            if (smile[i] == "=)") {
                smile.splice(smile[i] = i, 1, ';)')
            }
            console.log(smile)
        }
        console.log(smile[i])
    }

    console.log(replacement())


// //const animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
// // 7) створити функцію яка отримує аргумент, якщо це 'last' то функція поміщає останній елемент массиву в новий массив і видаляє останній елемент массиву,
// // якщо аргумент 'first' то також записує перший елемент массиву до нового массиву і видаляє перший елемент з поточного
//
    const animalsArr = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];

    let firstLast = prompt("Введите значение first или last")
    let newArr = [];

    function GetAnimal(a, b) {
        console.log(a, "Не изменёный массив")
        if (b == "first") {
            newArr.push(a.shift())
            console.log(a, "Изменёный массив без первого значения")
        } else if (b == 'last') {
            newArr.push(a.pop())
            console.log(a, "Изменёный массив без последнего значения")
        }
        console.log(newArr, "Отделённое значение массива")
    }

GetAnimal(animalsArr, firstLast)


