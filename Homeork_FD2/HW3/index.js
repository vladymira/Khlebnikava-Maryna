const columns = ['name', 'count', 'price'];
const data = [
   { name: 'Хлеб', count: 12, price: 14.99 },
   { name: 'Молоко', count: 3, price: 3.2 },
   { name: 'Сыр', count: 1, price: 10 },
   { name: 'Вода', count: 2, price: 5.5 },
   { name: 'Колбаса', count: 3, price: 25.5 },
];

const textTable = createTextTable(columns, data);
console.log(textTable);


function createTextTable(columns, data) {
   let textTable = '';

   const arrLengths = getArrLengths(columns, data);
   // const maxNameLength = getMaxLength(data, columns[0]);
   // const maxCountLength = getMaxLength(data, columns[1]);
   // const maxPriceLength = getMaxLength(data, columns[2]);


   for (let i = 0; i < data.length; i++) {
      let normalizeStr = '│'
      let { name, count, price } = data[i];

      for (key in data[i]) {         
         normalizeStr = normalizeStr + (typeof data[i][key] === 'string' ? addSpaceStr(arrLengths[key], data[i][key]) : addSpaceNum(arrLengths[key], data[i][key])) + '│';
         debugger;
      }

      
      textTable = textTable + normalizeStr +  '\n' + ((i === data.length - 1)? getBorder(arrLengths, '├', '┤', '┼') : '') + '\n';
      debugger;
   }

   return getBorder(arrLengths, '┌', '┐', '┬') + '\n' + textTable + getBorder(arrLengths, '└', '┘', '┴');
}

// возвращает массив максимальных длин значений полей
function getArrLengths(columns, data) {
   let arr = {};

   for (let i = 0; i < columns.length; i++) {     
      arr[columns[i]] =  getMaxLength(data, columns[i]) ;
   }
   return arr;
}

// возвращает максимальную длину значения поля в объекте
function getMaxLength(arrData, fieldName) {
   const newArr = structuredClone(arrData);
   return Math.max.apply(null, newArr.map((el) => String(el[fieldName]).length)) + 2;  // учитываем пробелы слева и справа
}

// нормализация строки пробелами до требуемой длины(для строк)
function addSpaceStr(maxLength, str) {
   let result = ' ' + str;

   for (let i = 1; i < maxLength - str.length; i++) {
      result += ' ';
   }

   return result;
}

// нормализация строки пробелами до требуемой длины(для чисел)
function addSpaceNum(maxLength, num) {
   const numToString = String(num);
   let result = numToString;

   for (let i = 1; i < maxLength - numToString.length; i++) {
      result = ' ' + result;
   }
   return result + ' ';
}

// строим верхнюю, нижнююи промежуточную границы таблицы
function getBorder(arrLengths, charStart, charEnd, charMiddle) {
   
   let border = charStart;
   for (let i = 0; i < arrLengths.length; i++) {
      for (let j = 0; j < arrLengths[i]; j++) {
         border += '─';
      }

      border += i === arrLengths.length -1 ? charEnd: charMiddle;
   }

   debugger
   return border ;

}
// результат в консоли:
// ┌────────┬────┬───────┐
// │ Хлеб   │ 12 │ 14.99 │
// ├────────┼────┼───────┤
// │ Молоко │  3 │   3.2 │
// ├────────┼────┼───────┤
// │ Сыр    │  1 │    10 │
// ├────────┼────┼───────┤
// │ Вода   │  2 │   5.5 │
// └────────┴────┴───────┘