const countAll = CountChar('asssddadfgh');
console.log(countAll);


function CountChar(str){
   let result = {};

   for (let char of str){
    let count = result[char];    
     result[char] = count ? count + 1 : 1;                       
   }

   return result;
}
