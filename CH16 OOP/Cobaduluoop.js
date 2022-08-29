//OBJECT LITERALS
const circle = {
  radius: 1, //PROPERTIES
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    //METHOD
    console.log('draw');
  },
};

circle.draw();

//FACTORY FUNCTION
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw')
    }
  };
}

const circle = createCircle(1)
circle.draw();

//CONSTRUCTOR FUNCTION 
function Circle(radius) {
  this.radius = radius; // radius properties to argument
  this.draw = function() {
    console.log('draw');
  }
}
const another = new Circle(1); 

//FUNCTIONS ARE OBJECT

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw')
  }
}

Circle.call({}, 1);
Circle.apply({},[1,2,3]);

const another = Circle(1);