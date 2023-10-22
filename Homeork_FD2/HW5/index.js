// Создайте функцию printWithDelay, которая будет выводить в консоль отдельные слова из строки через определённые интервалы времени.
//  Функция должна принимать два аргумента: строка со словами и массив чисел, где каждое число это задержка (в секундах)
//   вывода определённого слова.

// Пример:
// printWithDelay('Мама мыла раму', [2, 6, 7]);

// // Через 2 секунды в косоли будет напечатано 'Мама'
// // Ещё через 6 секунд в косоли будет напечатано 'мыла'
// // Ещё через 7 секунд в косоли будет напечатано 'раму'
// Отсчёт времени для первого слова начинается с момента вызова функции. А отсчёт для каждого следующего слова начинается после
//  вывода предыдущего. Строка разбивается на слова по пробелу. Если чисел в массиве больше, чем слов в строке, 
//  то лишние числа игнорируются. Если чисел меньше, чем слов, то последнее число применяется для оставшихся слов.


printWithDelay('Мама очень долго мыла раму');

function printWithDelay(str, arrTimer) {
   const objPrint = getObj(str, arrTimer);

   for (print in objPrint) {
      //console.log('1')
      sleep(print, objPrint[print]*1000).then(console.log('sucsess'))
      //setTimeout(() => { console.log(print) }, objPrint[print]);
   }
}


function sleep(word, time) {
   return new Promise(resolve => setTimeout(() => { console.log(word) , time}));
 }
 


function getObj(str = 'Мама мыла раму', arrTimer = [2, 6, 7, 1, 10, 100]) {
   let newObj = {};
   const arrStr = str.split(' ');

   const lenStr = arrStr.length;
   const lenArrTimer = arrTimer.length;
   const lastTimer = lenStr > lenArrTimer ? arrTimer[lenArrTimer - 1] : null;

   for (let i = 0; i < lenStr; i++) {
      newObj[arrStr[i]] = lastTimer && i >= lenArrTimer - 1 ? lastTimer : arrTimer[i];
   }



   return newObj;
}