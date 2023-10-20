let v=0 ;
const stop = renderCycle(() => {document.body.textContent = String(++v)});




function renderCycle(callBack) {
    const idRef = { id: 0 };   
    const render = () => {
        idRef.id = requestAnimationFrame(() => {
            callBack();
            render();
        });
    }

    render();

    return () => { cancelAnimationFrame(idRef.id) };
}

///////////////////2//////////////////
// const cancelTask = scheduleTask(() => console.log('task'));
// const cancelTask1 = scheduleTask(() => console.log('task1'));

// setTimeout(cancelTask, 100);

// function scheduleTask(task){

//     const id = setTimeout(task, 300);
//     return () => clearTimeout(id) ;
// }
///////////////////2//////////////////


///////////////////1//////////////////
// const timerId = setTimeout(() => {console.log(5)}, 5_000);
// //console.log(timerId);


// setTimeout(() => {
//     clearTimeout(timerId);
//     console.log('clear timerId')
//     setTimeout(() => {
//         console.log('before clearInterval')
//         clearInterval(intervalId);
//         console.log('clear intervalId')
//     }, 3_000)
// }, 3_000);


// let s=0;

// const intervalId = setInterval(() => {
//     console.log(++s);
// }, 1_000);
///////////////////1//////////////////