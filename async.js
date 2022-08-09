let a = 50;
let b = 0;

// setTimeout(() => {
//     b = 30;
//     console.log(a + b);
// }, 2000)

console.log(a + b);


/** 
let waitingdata = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(b = 30) }, 2000);
});

waitingdata.then((data) => {
    console.log(a + data);
})
*/

/** 
const data = () => {

    setTimeout(() => {
        b = 30;
        console.log(a + b)
    }, 2000)
}

data();
*/


/** 
setTimeout(() => {
    console.log("1st Line");
}, 2000)


setTimeout(() => {
    console.log("2nd Line");
}, 3000)

setTimeout(() => {
    console.log("3rd Line");
}, 1000)
*/