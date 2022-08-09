const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'path')

//to create
// fs.writeFileSync(dirPath + '/anil.txt', "content")

//to delet
// fs.unlinkSync(dirPath + '/anil.txt')

//to show the files

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
    }
});