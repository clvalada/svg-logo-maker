function generateSVG(userInput) {
    // Extract user input
    const { initials, initialsColor, shape, shapeColor } = userInput;
  
    // Define SVG dimensions
    const width = 300;
    const height = 200;
  
    // Create the SVG content based on user choices
    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
  
    // Define text and shape elements
    const textElement = `<text x="${width / 2}" y="${height / 2}" fill="${initialsColor}" text-anchor="middle">${initials}</text>`;
  
    let shapeElement;
    if (shape === 'Circle') {
      shapeElement = `<circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) / 4}" fill="${shapeColor}" />`;
    } else if (shape === 'Triangle') {
      const trianglePoints = `${width / 2},${height / 6} ${width * 5 / 6},${height * 5 / 6} ${width / 6},${height * 5 / 6}`;
      shapeElement = `<polygon points="${trianglePoints}" fill="${shapeColor}" />`;
    } else if (shape === 'Square') {
      shapeElement = `<rect x="${width / 4}" y="${height / 4}" width="${width / 2}" height="${height / 2}" fill="${shapeColor}" />`;
    }
  
    // Combine text and shape elements into the SVG content
    svgContent += shapeElement + textElement;
  
    // Close the SVG element
    svgContent += '</svg>';
  
    return svgContent;
  }
  
  module.exports = {
    generateSVG,
  };
  