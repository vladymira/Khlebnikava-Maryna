// вызов1
for (const symbol of getValues(['a', 'b'], 5)) {
   console.log(symbol);
}

//вызов2
const g = getValues(['c', 'd', 'e'], 2);
g.next;

// другой как бы экземпляр, работающий независимо от g
const g2 = getValues(['c'], 3);

//обращаемся к итератору генератора
const it = g2[Symbol.iterator]();

function* getValues(symbols, repeatCount) {
   for (symbol of symbols) {
      for (let i = 1; i <= repeatCount; i++) {
         yield symbol;
      }
   }
};

function* repeatTimes(value, repeatCount) {
   for (let i = 1; i <= repeatCount; i++) {
      yield symbol;
   }
};

// переиспользование значения от другого генератора
function* getValues_new(symbols, repeatCount) {
   for (symbol of symbols) {
      yield* repeatTimes(symbol, repeatCount);
   }
};

//////////////////////////////////////////////
const iterableObj = {
   values: [1, 2, 3],

   // [Symbol.iterator](){
   //    return this.values.values(); // здесь должен быть метод-итератор
   // } 

   // итератор стал генератором
   *[Symbol.iterator]() {
      yield* this.values.values(); // здесь должен быть метод-итератор
   }

}

//далее
for (const value of iterableObj) { console.log(value) }


class Test {
   *[Symbol.iterator]() {
      yield 1;
      yield 2;
      yield 3;
   }

   [Symbol.toPrimitive](hint) {
      switch (hint) {
         case 'number':
            return 5;
         default:
            return 'five';
      }

   }
}

const t = new Test();
console.log([...t]);

