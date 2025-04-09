class Animal {
    constructor(name, legs){
        this.name = name;
        this.legs = legs;
    }

    sayHello(){
        console.log("Hello", this.name);
    }
}

const dog = new Animal("Tom", 4);
dog.sayHello();

