printWithDelay('Мама очень долго мыла раму', [2, 6, 7]);


function printWithDelay(text, delays) {
    delays = delays.slice();
    const words = text.split(' ');
    const getNextWord = () => words.shift();
    const getNextDelay = () => delays.lelgth === 1 ? delays[0] : delays.shift();

    const print = () => {
        const word = getNextWord();
        const delay = getNextDelay();

        if (word) {
            setTimeout(() => {
                console.log(word)
                print();
            }, delay*1000);


        }
    }

    print();

}