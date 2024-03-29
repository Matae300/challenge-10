const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  describe('render', () => {
    it('should render a triangle with specified color', () => {
      const shape = new Triangle(100); 
      shape.setColor('blue');
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'); 
    });
  });
});

describe('Square', () => {
  describe('render', () => {
    it('should render a square with specified color', () => {
      const shape = new Square(100);
      shape.setColor('red'); 
      expect(shape.render()).toEqual('<rect width="100" height="100" fill="red" />'); 
    });
  });
});

describe('Circle', () => {
  describe('render', () => {
    it('should render a circle with specified color', () => {
      const shape = new Circle(50); 
      shape.setColor('green'); 
      expect(shape.render()).toEqual('<circle cx="50" cy="50" r="50" fill="green" />'); 
    });
  });
});
