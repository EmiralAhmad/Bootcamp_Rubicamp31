function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

var userID = uuid(); //something like: "ec0c22fa-f909-48da-92cb-db17ecdb91c5"

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
  userID;

  constructor() {
    super(4, 4, 4, new Tyre(6, 'Dunlop'));
    this.model = "Camry";
    this.year = 2015;
    this.guarantee = Math.random() * 10;
    this.userID = userID
  }
  warranty() {
  const warranty = Math.round(this.year + this.guarantee);
  console.log(`This car ${this.model} have warranty till ${warranty} `);
  }
}
// const camry = new Camry('Camry');
// camry.warranty();

class Agya extends Car {
  model;
  year;
  guarantee;
  userID

  constructor() {
    super(4, 4, 4, new Tyre(4, 'Bridgestone'));
    this.model = "Agya";
    this.year = 2015;
    this.guarantee = Math.random() * 10;
    this.userID = userID
  }
    warranty(year) {
      const warranty = Math.round(this.year + this.guarantee);
      console.log(`This car ${this.model} have warranty till ${warranty} `);
    }
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
    for (let i = 0; i < Math.round(Math.random() * 10); i++) {
      const agya = new Agya();
      const camry = new Camry();
      this.vehicle.push(agya, camry);
    }
    const production = Math.round(Math.random(this.machinehour / this.time) * 10) * 20;
    console.log(`This factory ${this.name} have ${production} production capacity in this month`);
    console.log(`This month have ${this.vehicle.length} car`);
  }
  warranty(year) {
    for (let i = 0; i < this.vehicle.length; i++) {
      const Warrantylife = Math.round(this.vehicle[i].year + this.vehicle[i].guarantee);
      // console.log(`This ${camry.model} ${camry.userID} have warranty till ${camryWarranty}`);
      // console.log(`This ${agya.model} ${agya.userID} have warranty till ${agyaWarranty}`);
      if(year > Warrantylife) {
        console.log('Warranty is expired');
      } else {
        console.log(`This ${this.vehicle[i].model} ${this.vehicle[i].userID} have warranty till ${Warrantylife}`);
      }

      
    }
  }
}

const toyota = new CarFactory('Toyota');
toyota.production();
toyota.warranty(2016);