class Tyre {
  size;
  type;

  constructor(size, type) {
    this.size = size;
    this.type = type;
  }
}

class Car {
  window;
  chair;
  door;
  tyre;

  constructor(chair, door, window, tyre) {
    this.chair = chair;
    this.door = door;
    this.window = window;
    this.tyre = tyre;
  }
}
const mechanic = new Car();

class Camry extends Car {
  model;
  year;
  guarantee;

  constructor(model) {
    super(4, 4, 4, new Tyre(6, 'Dunlop'));
    this.model = model;
    this.year = 2015;
    this.guarantee = Math.random();
  }
//   warranty() {
//     const warranty = Math.round(this.year + this.guarantee);
//     console.log(`This car ${this.model} have warranty till ${warranty} `);
//   }
}
// const camry = new Camry('Camry');
// camry.warranty();

class Agya extends Car {
  model;
  year;
  guarantee;

  constructor(model) {
    super(4, 4, 4, new Tyre(4, 'Bridgestone'));
    this.model = model;
    this.year = 2015;
    this.guarantee = Math.random();
  }
//   warranty() {
//     const warranty = Math.round(this.year + this.guarantee);
//     console.log(`This car ${this.model} have warranty till ${warranty} `);
//   }
}
// const agya = new Agya('Agya');
// agya.warranty();

class CarFactory {
  name;
  machinehour;
  time;
  vehicle;
  constructor(name) {
    this.name = name;
    this.machinehour = 800;
    this.time = 1.5;
    this.vehicle = [];
  }
  production() {
    for (let i= 0; i < Math.round(Math.random() * 10); i++) {
        const agya = new Agya();
        const camry = new Camry();
        this.vehicle.push(agya,camry)
    }
    const production = Math.round(Math.random(this.machinehour / this.time) * 10) * 20;  
    console.log(`This factory ${this.name} have ${production} production capacity in this month`);
    console.log(`This month have ${this.vehicle.length} car`); 
  }
  warranty(){
    for (let i = 0; i < Math.round(Math.random() * 10); i++) {
        if(this.vehicle.guarantee = Agya) {
        }
        if(this.vehicle.guarantee = Camry) {
        }
    }
    console.log(`This car agya have warranty ${Math.round(Math.random(this.year + this.guarantee))} year`);
    console.log(`This car camry have warranty ${Math.round(Math.random(this.year + this.guarantee))} year`);
  }
}
const toyota = new CarFactory('Toyota');
toyota.production();
toyota.warranty();