function task1() {
    for (let i = 0; i <= 50; i++) {
        console.log(i)
    }
}

function task2(arrNumber) {
    for (let i = 0; i < arrNumber.length; i++) {
        console.log(arrNumber[i])
    }

    // for (let num of arrNumber){
    //     console.log(num)
    // }

}

function task3(arrNumber) {
    let multiplayArr = 1;

    for (let i = 0; i < arrNumber.length; i++) {
        multiplayArr *= arrNumber[i]
    }

    return multiplayArr;
}

function task3_2(arrNumber) {
    return arrNumber.reduce((a, b) => a * b);
}

function task4(arrNumber) {
    return arrNumber.filter((el) => el % 2 === 0 && el >= 0 && el <= 100);
}

function task5(num) {
    let res = num;
    let i = 0;

    while (res >= 50) {
        res /= 2;
        i++;
    }

    console.log(i);
}

// года от 0 до 2023
// вернуть массив лет, где сумма цифр = 13
function task6() {
    let arr13 = []

    for (let year = 0; year < 2023; year++) {       
        if (String(year).split('').reduce((a,b) => Number(a)+Number(b)) === 13){
             arr13.push(year);
        }

    }
    console.log(arr13);
}



console.log(task6());
