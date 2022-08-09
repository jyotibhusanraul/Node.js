const fs = require('fs'); //whoel filesystem_module

const fswrite = require('fs').writeFileSync; //only write file system module

// to create a file
fs.writeFileSync("filename.extension", "content"); // Syntax
fs.writeFileSync("index.txt", "File Created by fs module"); // eg.


// to delete the file
fs.unlinkSync("filename with extension"); // Syntax 
fs.unlinkSync("index.txt"); // eg.

console.log(__dirname); // Will show you the current working directorry path.
console.log(__filename); // Will show you the current working directorry path with filename.