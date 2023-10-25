// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { generateSVG } = require('./svgGenerator');

// Function to initialize app
// Array of questions for user input
function generatesvg(){
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter up to three characters to be used in the logo',
      name: 'initials',
      validate: function (input) {
        return input.length <= 3;
      }
    },
    {
      type: 'input',
      message: 'Please enter a text color (color name or hexadecimal.)',
      name: 'initialsColor',
    },
    {
      type: 'list',
      message: 'Please chose a shape.',
      name: 'shape',
      choices: ['Triangle', 'Circle','Square',],
    },
    {
        type: 'input',
        message: 'Please enter a shape color (color name or hexadecimal.)',
        name: 'shapeColor',
      },
  ])
// Function to create SVG file  
  .then((response) => {
    const svgTemplate = generateSVG(response);

    const fileName = 'logo.svg';
    const filePath = path.join(__dirname, fileName);


// user feedback
        fs.writeFile('logo.svg', svgTemplate, (err) => {
            if (err) {
              console.error('Error generating SVG file:', err);
            } else {
              console.log('Generated logo.svg successfully!');
            }
          });
        });
    }


// Function call to initialize app
generatesvg();