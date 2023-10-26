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


printWithDelay('Мама очень долго мыла раму', [2, 6, 7]);


function printWithDelay(str = 'Мама мыла раму', timers = [2, 6, 7, 1, 10, 3]) {
   const arrStr = str.split(' ');   
   const arrTimers = getNormalizeTimer(arrStr, timers);

     arrStr.forEach((el, index) => {
      setTimeout(() => {
         console.log(el);
      }, arrTimers[index] * 1000);
   });


}

function getNormalizeTimer(arrStr, timers) {
   const lenStr = arrStr.length;
   const lenTimers = timers.length;

  // console.log(timers);
   if (lenStr > lenTimers) {
      for (let i = lenTimers; i < lenStr; i++) {
         timers.push(timers[lenTimers - 1]);
      }
   }

   timers.forEach((el, index, arr) => arr[index] += arr[index - 1] ?? 0);
 //  console.log(timers);

   return timers;
}