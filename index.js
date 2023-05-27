// my requires
const  inquirer = require("inquirer");

const {Triangle, Circle, Square} = require("./lib/shape.js")

const {writeFile} = require("fs/promises");

const SVG = require('./lib/svg.js')


// function asking questions to create logo
function createLogo() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "logoChars",
          message: "Enter up to three characters",
          validate: charsInput => {
              if (charsInput) {
                  return true;
              } else {
                  console.log("Choose between 1 and 3 characters")
                  return false;
              }
          }
        },
        {
          type: "input",
          name: "textColor",
          message: "Enter a color for your text",
        },
        {
          type: "list",
          name: "shapes",
          message: "Pick one of the following shapes",
          choices: ["Circle", "Triangle", "Square"]
        },
        {
          type: "input",
          name: "logoColor",
          message: "Enter a color for your shape",
        },

      ])
      // bring in shape, text, text color
      .then (({ logoChars, textColor, shapes, logoColor}) => {
        var shape;
        switch (shapes) {
          case "Circle":
            shape = new Circle();
            break;
          case "Triangle":
            shape = new Triangle();
            break;
          case "Square":
            shape = new Square();
            break;
        }
        // generates the new logo
        shape.setColor(logoColor);
        const svg = new SVG();
        svg.setText(logoChars, textColor);
        svg.setShape(shape)
        const svgMarkup = svg.render();
        return writeFile("logo.svg", svgMarkup);
      })
      .then(() => {
        console.log("logo created")
      })
      .catch((error) => {
        console.log("An error occured", error)
      });
    }
3
    createLogo();

    