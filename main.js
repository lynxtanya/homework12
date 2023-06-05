'use strict';

// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const myArr = ['myName', 'myLastName', 35, 36, 37, 38, 'myCity', 'myCountry', 50, 20];
console.log(myArr);

let myArrNumbers = [];

function sum() {
    let sumNum = 0;
    let num = 0;
    for(let i = 0; i < myArr.length; i++) {
        let currentElement = myArr[i];
        
        if (typeof currentElement === 'number') {
            myArrNumbers.push(currentElement);
            sumNum = sumNum + currentElement;
            num = num + 1;
        }
  
    }

    console.log(sumNum/num);
}

sum();

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.


let x = prompt('Enter number of x');
let y = prompt('Enter number of y');
let znak = prompt('Select znak from +, -, *, /, %, ^');



function doMath(x, znak, y) {
    console.log('Ви ввели ' + x + znak + y);

    if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) {
        return 'Помилка';
    } else {
        return eval(x + znak.replace('^', '**') + y);
    }    
}

console.log(doMath(x, znak, y));;


// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let text = 'Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.';
let delLet = prompt('Enter the letters delete');
let textStr = [];
let delArr = [];
let a = textStr;
let b = delArr;

function letters() {

    for (let j = 0; j <= delLet.length - 1; j++) {
        delArr.push(delLet[j]);
    }

    return delArr;
    
};

letters()

function mainText() {

    for (let k = 0; k <= text.length - 1; k++) {
        textStr.push(text[k]);
    }

    return textStr;
    
};

mainText()

function deleteLetter(a, b) {
    let result = [];
    for(var i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) == -1) {
        result.push(a[i]);
      }
    }
    let newText = result.join('');
    return newText;
  }
  
  console.log(deleteLetter(a, b));



