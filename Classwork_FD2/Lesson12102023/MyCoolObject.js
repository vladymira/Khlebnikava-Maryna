// class MyCoolObject extends MyObject{
//    coolIndex = 100;

//    bye(){
//     alert(this.coolIndex);
//    }
// }


// если надо изменить coolIndex при создании экземпляра MyCoolObject
class MyCoolObject extends MyObject {
    coolIndex;
    #coolIndex2; // приватное св-во

    constructor(value, index) {
        super(value); // вызов конструктора базового класса
        this.coolIndex = index;
    }

    bye() {
        alert(this.coolIndex);
       // alert(this.#coolIndex2);
    }

    hello() {
        // super.hello(); если надо исп-ть какую-то часть род.конструктора
        console.log(this.value);
        this.#bye();
    }

    #bye() {
        alert(this.coolIndex);
        //alert(this.#coolIndex2);
    }
}