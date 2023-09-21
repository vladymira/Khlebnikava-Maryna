const FALLBACK_VALUE = 'none';
const firstName = prompt('Enter your name') ?? FALLBACK_VALUE  ;
const lastName = prompt('Enter your last name')  ?? FALLBACK_VALUE ;
const middleName = prompt('Enter your middle name')  ?? FALLBACK_VALUE ;

//const fio = lastName + ' ' + firstName + ' ' + middleName; 
const fio = `${lastName} ${firstName} ${middleName}`; 
alert(fio);