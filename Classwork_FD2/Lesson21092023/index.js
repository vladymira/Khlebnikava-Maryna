const MAX_AGE = 150;
const MIN_AGE = 1;

let firstName ;
let lastName ;
let middleName;
let userAge;

do {
    userAge = prompt('Enter your age (разделитель дробной части .)');
} while (!(userAge && Number(userAge) && Number(userAge) >= 1 && Number(userAge) <= 150))

do {
    const userInput = prompt('Enter your age (разделитель дробной части .)');
    userAge = userInput? Number(userInput) : NaN;
} while (!isFinite(userAge) || userAge > 150 || userAge <1) // 150 и 1  это magic number, лучше вынести их в const (см.выше)


do {
    firstName = prompt('Enter your name') ;
} while (firstName === null || firstName==='')  // или Boolean(firstName) === false или еще короче firstName == false (используем приведение типов при ==) и самый короткий (!firstName)

do {
    lastName = prompt('Enter your last name') ;
} while (!lastName)

do {
    middleName = prompt('Enter your middle name') ;
} while (!middleName)



const fio = `${lastName} ${firstName} ${middleName}  age ${userAge}`; 
alert(fio);