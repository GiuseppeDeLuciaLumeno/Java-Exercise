class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {

 static calculate(figure) {
  let areaValue;

  if (figure instanceof Square) {
  areaValue = figure.side *= figure.side
  }
  else if(figure instanceof Rectangle){
  areaValue = figure.width * figure.height
  }
 else if (figure instanceof Circle) {
  areaValue = figure.radius * figure.radius * 3,14
 }
 else{
  return `Error: Invalid Figure!`
 }
 return areaValue
 }

}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);


console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
