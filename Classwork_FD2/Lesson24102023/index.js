delay(5_000).then((res) => { console.log(res) });


// если resolve должен вернуть значение, то пишем так
// тогда можно delay(5_000).then((res) => console.log(res));
// delay(5_000).then(console.log(res)) - НЕПРАВИЛЬНО!!!
function delay(time) {
   return new Promise((resolve) => {
      setTimeout(() => { resolve('All OK!') }, time);
   })
};


// если resolve не должен ничего вернуть, то пишем так
// тогда delay(5_000).then( делаем что-нибудь); - принимать нечего, но в then все равно какая-то функция, хотя вот так тоже работает:
// let aa = 0;
// delay(5_000).then(aa++); и потом
// в консоли можем посмотреть значение аа
function delay(time) {
   return new Promise((resolve) => {
      setTimeout(resolve, time);
   })
};

// так неправильно, потому что resolve вызовется сразу, без задержки по времени,
// т.к. в setTimeout мы передали не ф-цию, а результат её вызова и setTimeout ничего не планирует. 
// Правильный синтаксис тогда setTimeout(resolve, time,  'All OK!');
function delay(time) {
   return new Promise((resolve) => {
      setTimeout(resolve( 'All OK!'), time );
   })
};

