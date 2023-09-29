const MAX_AGE = 150;
const MIN_AGE = 1;
const M_RETIRED = 63;
const F_RETIRED = 58;
const SEX_M = 'М';
const SEX_G = 'Ж';



const firstName = getUserInput('Введите ваше имя', keepWithoutChange, isNotEmptyString)  ;
const lastName = getUserInput('Введите вашу фамимлию', keepWithoutChange, isNotEmptyString)  ;
const middleName = getUserInput('Введите ваше отчество', keepWithoutChange, isNotEmptyString)  ;
const age  = getUserInput('Введите ваш возраст', transformToNumber, isValidAge )  ;
const sex  = getUserInput('Введите ваш пол', transformToSex, isNotEmptyString )  ;
const retiredAge = sex === SEX_M ? M_RETIRED : F_RETIRED; 
const retired = age >= retiredAge;


let  result = `
ФИО : ${lastName} ${firstName} ${middleName}
Возраст : ${age}
Пол : ${sex}
На пенсии : ${retired? 'Да': 'Нет'} 
`
alert(result) ;    

/////////////////////////////////////////////////////////////////
function getUserInput(message, transform, isValid)
{
    let userInput = null;
    let isCancelled = false;

    do {
        let rawUserInput = prompt(message) ;
        isCancelled = rawUserInput === null;
        
        userInput = isCancelled ? null: transform(rawUserInput);

    } while (isCancelled || !isValid(userInput))  // 

    return userInput;
}

function getUserInput_old(message)
{
    let userInput;

    do {
        userInput = prompt(message) ;
    } while (!userInput)  // 

    return userInput;
}

function keepWithoutChange(data){
    return data;
}

function transformToSex(data){

    switch (data){
        case 'М':
        case 'м':
            return SEX_M;
        case 'Ж':
        case 'ж':
            return SEX_G;           
        default:
           return '';
       }     
}

function transformToNumber(data){
    if (!data){
        return NaN;
      }
  
    return replaceSymbol(data);
}

function replaceSymbol(inputStr, targetSymbol, replacementSymbol)
{
  let resultString = '';

  for (let char in inputStr)
  {

    //resultString += char === targetSymbol? replacementSymbol :  char;

    if (char === targetSymbol)
    {
        resultString += replacementSymbol;
    }
    else
    {
        resultString += char;
    }
  }
  
  alert(resultString);
  return resultString;

}


function isNotEmptyString(value){
   return Boolean(value);
}

function isValidAge(inputAge)
{
    return Number.isFinite(inputAge) && inputAge >= MIN_AGE && inputAge <= MAX_AGE;
}