class AsyncArray extends Array {
    serialMap(transformFn) {
        return this.reduce((promise, el, index, arr) => {
            return promise.then(
                (acc) => transformFn(el, index, arr).then(result => {
                    acc[index] = result;
                    return acc;
                }),
            );
        }, Promise.resolve(new AsyncArray(this.length))
        );
    }
}


const asyncArray = new AsyncArray(1, 2, 3);

const asyncTransformation = (el, index, asyncArray) => new Promise((resolve, reject) => setTimeout(() => resolve(el + 100), 3000));


asyncArray.serialMap(asyncTransformation).then(result => {
    console.log(result);
});
