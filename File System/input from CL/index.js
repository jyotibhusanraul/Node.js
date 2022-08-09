const fs = require('fs');
//using process.argv
// console.log(process.argv);


if (process.argv[2] == "add") {
    fs.writeFileSync(process.argv[3], process.argv[4])
} else if (process.argv[2] == 'remove') {
    fs.unlinkSync(process.argv[3])
} else {
    console.log("Please write file name followed by extension and content after 'add' or 'remove' tag")
}

// type this in terminal / cmd :    node index.js add anil.txt "input from cli"
//  anil.txt will create automatically with content.