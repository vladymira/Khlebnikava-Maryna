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
                let funcRes = func(testValue);

                if (typeof funcRes === 'function') {
                    const res = funcRes(testValue)
                    if (res !== null) {
                        result[func.name] = res;
                        if (this.mode === 'single') break;
                    }
                }
                else {
                    const res = funcRes;
                    if (res !== null) {
                        result[func.name] = res;
                        if (this.mode === 'single') break;
                    }

                }


            }

            // switch (this.mode) {
            //     case 'single':
            //         for (let func of this.arrFunctions){
            //             let funcRes = func(testValue); 
            //             debugger;
            //             if (!funcRes){ // not null, т.е. error
            //                 result[func.name] = funcRes;
            //                 break;
            //              } 

            //         }

            //         break;
            //     case 'multi':
            //         for (let func of this.arrFunctions){
            //             let funcRes = func(testValue); 
            //             if (!funcRes){ // not null, т.е. error
            //                 result[func.name] = funcRes;             
            //              } 

            //         }
            //         break;
            //     default:
            //         result = { error: 'что-то е то с настройками' }
            // };
        }


        console.log(Object.keys(result).length === 0 ? null : result);
    }
}