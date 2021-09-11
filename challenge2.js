// Class of Auto
class Auto {
    constructor(model, cylinder) {
        this.model = model
        this.cylinder = cylinder
    }

    startEngine() {
        return "Start Engine called"
    }

    accelerateCar() {
        return "Accelerate Car called"
    }

    brakeCar() {
        return "Car Brake called"
    }

    get carModel() {
        return this.model
    }

    get carCylinder() {
        return this.cylinder
    }
}

class MiniCooper extends Auto {
    constructor(name, model, cylinder) {
        super(model, cylinder)
        this.name = name
    }

    // overriding the methods
    startEngine() {
        return this.name + " " + this.carModel + " has started"
    }

    accelerateCar() {
        return this.name + " " + this.carModel + " has accelerated"
    }

    brakeCar() {
        return this.name + " " + this.carModel + " has braked"
    }

    cylinders() {
        return this.name + " " + this.carModel + " has " + this.carCylinder
    }

    get carName() {
        return this.name
    }
}

class BMW extends Auto {
    constructor(name, model, cylinder) {
        super(model, cylinder)
        this.name = name
    }

    // overriding the methods
    startEngine() {
        return this.name + " " + this.carModel + " has started"
    }

    accelerateCar() {
        return this.name + " " + this.carModel + " has accelerated"
    }

    brakeCar() {
        return this.name + " " + this.carModel + " has braked"
    }

    cylinders() {
        return this.name + " " + this.carModel + " has " + this.carCylinder
    }

    get carName() {
        return this.name
    }
}

class Ford extends Auto {
    constructor(name, model, cylinder) {
        super(model, cylinder)
        this.name = name
    }

    // overriding the methods
    startEngine() {
        return this.name + " " + this.carModel + " has started"
    }

    accelerateCar() {
        return this.name + " " + this.carModel + " has accelerated"
    }

    brakeCar() {
        return this.name + " " + this.carModel + " has braked"
    }

    cylinders() {
        return this.name + " " + this.carModel + " has " + this.carCylinder
    }

    get carName() {
        return this.name
    }
}

let auto = new Auto("Malibu", "6 Cylinders")
console.log(auto.carModel)
console.log(auto.carCylinder)
console.log(auto.startEngine())
console.log(auto.accelerateCar())
console.log(auto.brakeCar())
console.log(" ")
console.log("------------------------------------------")
console.log(" ")

let miniCooper = new MiniCooper("Mini Cooper", "Countryman", "3 Cylinder")
console.log(miniCooper.startEngine())
console.log(miniCooper.accelerateCar())
console.log(miniCooper.brakeCar())
console.log(miniCooper.cylinders())
console.log(" ")
console.log("------------------------------------------")
console.log(" ")

let bmw = new BMW("BMW", "116i", "3/4 Cylinders")
console.log(bmw.startEngine())
console.log(bmw.accelerateCar())
console.log(bmw.brakeCar())
console.log(bmw.cylinders())
console.log(" ")
console.log("------------------------------------------")
console.log(" ")

let ford = new Ford("Ford", "Explorer", "4 Cylinders")
console.log(ford.startEngine())
console.log(ford.accelerateCar())
console.log(ford.brakeCar())
console.log(ford.cylinders())