//let arr = ['Бибигуль', 'Талгат', 'Сауле', 'Нурасыл', 'Мадина', 'Нургазы']
//let newArr = [...arr, 'Еркежан']
//console.log(newArr);
//разлие spread и rest


//для сбора оставшихся элементов массива в новый массив. 
//Это особенно полезно в функциях, когда количество аргументов неизвестно заранее
//reduce используется для преобразования массива в единое 
//значение (сумму, среднее, конкатенацию и т. д.) путем применения функции к каждому элементу массива и аккумулирования результата.
/*
Добавление и удаление элементов:
push(element) - добавляет элемент(ы) в конец массива.
pop() - удаляет последний элемент из массива.
unshift(element) - добавляет элемент(ы) в начало массива.
shift() - удаляет первый элемент из массива.
*/

/*function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

let result = sum(1, 2, 3, 4, 5);
console.log(result);
*/
/*
let result = multiplyByTwo(1, 2, 3, 4, 5);
console.log(result);

numbers.push(1, 2, 3, 4, 5);
numbers = numbers.map(num => num * 2);
console.log(numbers);
*/

//let numbers = [];
/*
for (i in arr) // по индексу
{
  console.log(i);
}

for (el of arr) //по элементу
{
  console.log(el);
}
*/

/*let arr = ['Бибигуль', 'Талгат', 'Сауле', 'Нурасыл', 'Мадина', 'Нургазы']
//arr.shift(); // del first elem
arr.splice(0, 2)  // del start, element count
console.log(arr);
*/

// Используем map для умножения каждого элемента на 2
let numbers = [1, 2, 3, 4, 5];
//let multipliedWithMap = numbers.map(num => num * 2);
//console.log(multipliedWithMap);

// Используем reduce для умножения каждого элемента на 2
/*let multipliedWithReduce = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);
console.log(multipliedWithReduce);
*/

function deleteIndex() {
  let targetName = document.getElementById('inputId').value || "";
  let res = document.getElementById('result');
  let arr = ['Бибигуль', 'Талгат', 'Сауле', 'Нурасыл', 'Мадина', 'Нургазы']  
  let index = arr.indexOf(targetName);

  if (index !== -1) 
  {
    arr.splice(index, 1)
    let text = arr.join(', ');
    res.textContent  = text;
    res.style.display = 'block';
  } else {
    res.textContent  = `Имя '${targetName}' не найдено в массиве.`;
    res.style.display = 'block';   
  }
}

function multipleNumber()
{
  let target = document.getElementById('inputId').value || "";
  let res = document.getElementById('result');
  let arr = target.split(",");

  let multipliedWithMap = arr.map(num => num * 2)

  res.textContent  = `это массив: ${multipliedWithMap}. 
  а это удвоенные результаты:  ${multipliedWithMap}`;
  res.style.display = 'block';
}