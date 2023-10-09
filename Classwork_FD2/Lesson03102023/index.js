const countAll = CountChar('asssddadfgh');
console.log(countAll);


function CountChar(str){
   // вариант мой
   // let result = {};

   // for (let char of str){
   //  let count = result[char];    
   //   result[char] = count ? count + 1 : 1;                       
   // }
   //return result;

   // вариант2
   // for (const char of str){      
   //     result[char] = (result[char] ?? 0) + 1;                       
   //   }

   // вариант3
   return [...str].reduce((result, char) => {
      result[char] = (result[char] ?? 0) + 1; 

      return result;
   },{})

   
}
