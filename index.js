const  inquirer = require("inquirer");

const {Triangle, Circle, Square} = require("./lib/shape")

const {writeFile} = require("fs/promises");

const SVG = require('./lib/svg')


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
          choices: ["Circle", "Triangle", "Sqaure"]
        },
        {
          type: "input",
          name: "logoColor",
          message: "Enter a color for your shape",
        },

      ])
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
        shape.setColor(logoColor);
        const svg = new SVG();
        svg.setText(logoChars, textColor);
        svg.setShape(shape)
        return writeFile("logo.svg", svg.render());
      })
    }

    createLogo()

    