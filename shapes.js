class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.color = '';
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(`Perimeter of ${this.name}: ${perimeter}`);
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    switch (this.name) {
      case 'triangle':
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
      case 'square':
        return `<rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
      case 'circle':
        return `<circle cx="${this.sideLength}" cy="${this.sideLength}" r="${this.sideLength}" fill="${this.color}" />`;
      default:
        return '';
    }
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("circle", 1, radius);
  }
}

class Triangle extends Shape {
  constructor(sideLength) {
    super("triangle", 3, sideLength); 
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength); 
  }
}

module.exports = { Circle, Triangle, Square };
