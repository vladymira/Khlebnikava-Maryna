// Домашнее задание №6
// ===================

// ```
// Вносите изменения в файлы:

// - ./AsyncArray.js
// - ./async.js
// ```

// > В данном домашнем задании нельзя использовать синтаксис `async/await`!

// ## Задание №1

// Создайте класс `AsyncArray` расширяющий обычный `Array`.
// Класс `AsyncArray` должен содержать один метод `serialMap()`.
// Данный метод должен работать как обычный `map()`, но с учётом того,
// что каждое преобразование элемента массива происходит асинхронно,
// т.е. функция-преобразователь будет возвращать `Promise`.
// Следовательно, результатом `serialMap()` тоже должен быть `Promise` с новым экземпляром `AsyncArray` содержащим результаты всех асинхронных преобразований.
// Каждое следующее преобразование должно запускаться только после того, как завершилось предыдущее.

// #### Пример:
// ```javascript
// import {AsyncArray} from './AsyncArray.mjs';

// const asyncTransformation = (el, index, asyncArray) => new Promise((resolve, reject) => {
//     // любое асинхронное преобразование
// });
// const asyncArray = new AsyncArray(1, 2, 3);

// asyncArray.serialMap(asyncTransformation).then(result => {
//     // result - экземпляр AsyncArray с результатами преобразований
// });
// ```

const asyncArray = new AsyncArray(1, 2, 3);

const asyncTransformation = (el, index, asyncArray) => new Promise((resolve, reject) => {
    new Promise((resolve, reject) => setTimeout(() => resolve(el+100), 1000))
     });


class AsyncArray extends Array {
    #newArr;

    constructor(...data)
    {
        super();
        this.newArr = data;
    }

    get newArr(){
        return this.#newArr
    }

    set newArr(value){
        this.#newArr = value;
    }

    [Symbol.iterator](){
        asyncTransformation();
    }
  }
  
