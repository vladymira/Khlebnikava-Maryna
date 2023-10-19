class Animal {
    eyes = 2;
    #legs = 4;

    
    constructor(varEyes, varLegs){
       this.eyes = varEyes;
       this.#legs = varLegs;

       console.log(`Глаз: ${this.eyes} \n Ног: ${this.#legs}`)
    }

    say(sound){        
       console.log(sound);
    }
}


let dog = new Animal(3,5);


class IncreasingCounter {
   #count = 0;
   get value() {
     console.log('Getting the current value!');
     return this.#count;
   }
   increment() {
     this.#count++;
   }
 }

 const counter = new IncreasingCounter();


