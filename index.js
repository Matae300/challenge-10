const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log(`SVG data written to ${fileName}`);
    }
  });
}

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Type 3 letters for the shape",
        validate: function (value) {
          if (value.length === 3) {
            return true;
          } else {
            return "Please enter exactly 3 letters for the shape title.";
          }
        },
      },
      { type: "input", name: "color", message: "Enter a color for the text" },
      {
        type: "list",
        name: "shapeType",
        choices: ["Square", "Circle", "Triangle"],
        message: "Pick a Shape."
      },
      { type: "input", name: "shapeColor", message: "What is the color of your shape?" }
    ])
    .then((response) => {
      const { shapeType, shapeColor, title, color } = response;
      let selectedShape;

      switch (shapeType) {
        case "Square":
          selectedShape = new Square(100);
          break;
        case "Circle":
          selectedShape = new Circle(50); 
          break;
        case "Triangle":
          selectedShape = new Triangle(100);
          break;
        default:
          console.error("Invalid shape type.");
          return;
      }

      selectedShape.setColor(shapeColor);
      const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                        ${selectedShape.render()}
                        <text x="10" y="20" font-family="Arial" font-size="20" fill="${color}">${title}</text>
                      </svg>`;
      writeToFile('shape.svg', svgData);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Initialize the application
init();
