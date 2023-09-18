const fs = require('fs');
const path = require('path');

const projectDir = 'frontend-scaffold';

const htmlDir = path.join(projectDir, 'html');
const cssDir = path.join(projectDir, 'css');
const jsDir = path.join(projectDir, 'js');

if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir);
    console.log(`Frontend scaffold created successfully!`);
} else {
    console.error(`Project directory "${projectDir}" already exists.`);
}

if (!fs.existsSync(htmlDir)) {
    fs.mkdirSync(htmlDir);
    console.log(`Created HTML directory: ${htmlDir}`);
    const htmlContent = `<!DOCTYPE html> 
    <html lang="en"> 
    <head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css"> 
    <title>Document</title> 
    </head> 
    <body> 
    <h1>Welcome</h1> 
    <script src="./js/script.js"></script> 
    </body>
    </html>`;

    fs.writeFileSync(path.join(htmlDir, 'index.html'), htmlContent);
    console.log(`Created HTML file: ${path.join(htmlDir, 'index.html')}`);
} else {
    console.error(`HTML directory "${htmlDir}" already exists.`);
}


// Create CSS directory and CSS file
if (!fs.existsSync(cssDir)) {
    fs.mkdirSync(cssDir);
    console.log(`Created CSS directory: ${cssDir}`);
    
    const cssContent = 'h1 {text-align:center; }';

    fs.writeFileSync(path.join(cssDir, 'style.css'), cssContent);
    console.log(`Created CSS file: ${path.join(cssDir, 'style.css')}`);
} else {
    console.error(`CSS directory "${cssDir}" already exists.`);
}


if (!fs.existsSync(jsDir)) {
    fs.mkdirSync(jsDir);
    console.log(`Created JS directory: ${jsDir}`);

    const jsContent = 'alert("Welcome");';
    fs.writeFileSync(path.join(jsDir, 'script.js'), jsContent);
    console.log(`Created JS file: ${path.join(jsDir, 'script.js')}`);
} else {
    console.error(`JS directory "${jsDir}" already exists.`);
}