class Validator {
    enabled = true;

    constructor(arrFunctions, objConfig) {
        this.mode = objConfig ? objConfig.mode : 'single';
        this.arrFunctions = arrFunctions;
    }


    //включает валидатор
    enabled() {
        this.enabled = true;
    };

    //выключает валидатор 
    disable() {
        this.enabled = false;
    };

    //переключает состояние валидатора на обратное от текущего, может принимать конкретное состояние в качестве аргумента
    toggle(value) {
        this.enabled = value === undefined ? !this.enabled : value;
    };

    //запускает валидатор, в качестве аргумента принимает тестируемое значение и возвращает `null` если значение корректное, 
    //если значение не прошло валидацию, то возвращает объект с ошибками.
    validate(testValue) {
        let result = {};

        if (this.enabled) {

            for (let func of this.arrFunctions) {
                const res = func(testValue);

                if (res !== null) {
                    result[func.name] = res;
                    if (this.mode === 'single') break;
                }

            }

        }

        let resultFinal = {};

        Object.values(result).forEach((el) => {
            console.log(el);
            resultFinal[Object.keys(el)[0]] = Object.values(el)[0];
        })

        console.log(resultFinal)


        console.log(Object.keys(result).length === 0 ? null : result);
    }
}