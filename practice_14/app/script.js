// Задание #1: создать массив, показать в консоли первый элемент и последний элемент
// Создание массива
let myArray = ["c#", "js", "python", "c++", "java"];

// Вывод первого элемента в консоль
console.log("Первый элемент массива: " + myArray[0]);

// Вывод последнего элемента в консоль
console.log("Последний элемент массива: " + myArray[myArray.length - 1]);

// Задание #2: добавить в пустой массив элементы от 0 до 10
let myArray1 = [];

// Добавление элементов в массив в цикле
for (let i = 0; i <= 10; i++) {
    myArray1.push(i);
}

console.log(myArray1);

// Задание #3: в массиве из 0 и 1 вывести только элементы которые равны 0
let binaryArray = [0, 1, 1, 0, 1, 0, 0, 1, 1, 0];

// Вывод элементов равных 0 в консоль
for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] === 0) {
        console.log(binaryArray[i]);
    }
}

// Задание #4: в массиве из 0 и 1 если элемент равен 0 то присвоить ему 1 и вывести в консоли результат 
// Создание массива из 0 и 1
var binaryArray1 = [0, 1, 1, 0, 1, 0, 0, 1, 1, 0];

// Присвоение 1 элементам, равным 0, и вывод результата в консоль
for (var i = 0; i < binaryArray1.length; i++) {
    if (binaryArray1[i] === 0) {
        binaryArray1[i] = 1;
    }
}
console.log(binaryArray1);

// Задание #5: проверить существует ли элемент в массиве 
// Метод includes() в js используется для проверки наличия определенного элемента в массиве. 
// Он возвращает логическое значение true, если элемент найден, и false, если элемент отсутствует.

let namesArray = ["Балабай", "Мадина", "Талгат", "Нурасыл", "Бибигуль"];

let searchedName = "Еркежан";
console.log(namesArray.includes(searchedName));

// Задание #6

let list = ["Алдабергенов Балабай","Murat Nurassyl", "Aбдыраимова Бибигуль", "Асубаева Еркежан", "Курманов Талгат","Дакеева Мадина","Матенов Нургазы Асенбаевич","Ахметжанов Айдархан"]
var searched= "Асубаева Еркежан";

if (namesArray.includes(searched)) {
    console.log(searched + " присутствует в массиве имен.");
} else {
    console.log(searched + " отсутствует в массиве имен.");
}

// Задание #7
var list1 =  ["Алдабергенов Балабай","Murat Nurassyl", "Aбдыраимова Бибигуль", "Асубаева Еркежан", "Курманов Талгат","Дакеева Мадина","Матенов Нургазы Асенбаевич","Ахметжанов Айдархан"]

var searchedNames = ["Murat Nurassyl", "Aбдыраимова Бибигуль", "John"];

var exists = false;

for (var i = 0; i < searchedNames.length; i++) {
    var currentName = searchedNames[i];
    if (namesArray.includes(currentName)) {
        exists = true;
        break; 
    }
}

console.log(exists);