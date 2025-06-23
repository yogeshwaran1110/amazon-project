class Car{
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor (carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
    }

    displayInfo() {
        const trunkStatus= this.isTrunkOpen ? 'open' : 'closed';

        console.log(`${this.#brand}  ${this.#model} speed: ${this.speed} km/h, Trunk: ${trunkStatus}`);
    }
    
    go () {
        
        if(!this.isTrunkOpen){
            this.speed +=5;
        }
        // Limit the speed to 200.
        if(this.speed > 200) {
            this.speed = 200;
        }
    }

    brake () {
        this.speed -= 5

        //Limit the speed to 0.
        if(this.speed < 0){
            this.speed = 0;
        }
    }

    openTrunk() {
        if(this.speed === 0) {
            this.isTrunkOpen = true;
        }
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }
}

const car1 = new Car({
    brand : 'toyota',
    model : 'corolla'
});

const car2 = new Car({
    brand : 'telsa',
    model : 'model 3'
});

console.log(car1,car2);

car1.displayInfo();
car1.go();
car1.go();
car1.go();
car1.brake();
car1.displayInfo();
car1.openTrunk();
car1.displayInfo();

car2.displayInfo();
car2.go();
car2.brake();
car2.brake();
car2.displayInfo();
car2.openTrunk();
car2.go();
car2.displayInfo();

class RaceCar extends Car{
    acceleration;

    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go(){
        this.speed += this.acceleration;

        if(this.speed > 300){
            this.speed = 300;
        }
    }

    openTrunk () {
        console.log('Race car do not have a truck.');
    }

    closeTrunk() {
        console.log('Race car do not have a truck.');
    }
}


const raceCar = new RaceCar( {
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20
});

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();
raceCar.brake();
raceCar.displayInfo();