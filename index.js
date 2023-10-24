//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Function to initialize app
// Array of questions for user input
function generatersvg(){
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter up to three characters to be used in the logo',
      name: 'initials',
    },
    {
      type: 'input',
      message: 'Please enter a text color.',
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
        message: 'Please enter a shape color.',
        name: 'shapeColor',
      },
  ])
// Function to write SVG file  
  .then((response) => {
      const svgTemplate = `
      `;

// user feedback
        fs.writeFile('logo.svg', svgTemplateTemplate, (err) => {
            if (err) {
              console.error('Error generating SVG file:', err);
            } else {
              console.log('SVG file generated successfully!');
            }
          });
        });
    }


// Function call to initialize app
generatersvg();