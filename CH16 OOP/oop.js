class Tyre {
  size;
  type;

  constructor(size, type) {
    this.size = size;
    this.type = type;
  }
}

// const tyre = new Tyre(6, 'Dunlop');

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
  warranty() {
    const warranty = Math.round(this.year + this.guarantee);
    console.log(`This car ${this.model} have warranty till ${warranty} `);
  }
}
const camry = new Camry('Camry');
camry.warranty();

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
  warranty() {
    const warranty = Math.round(this.year + this.guarantee);
    console.log(`This car ${this.model} have warranty till ${warranty} `);
  }
}
const agya = new Agya('Agya');
agya.warranty();

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
  production(v) {
    this.vehicle.push(v)
    const production = Math.round(Math.random(this.machinehour / this.time)) * 20;
    console.log(`This factory ${this.name} have ${production} production capacity in this month`);
  }
}
const toyota = new CarFactory('Toyota');
const total = toyota.production(agya) + toyota.production(camry);