const array = [1, 2, 3, 4, 5, 6, 4, 4, 5]

console.log("array : ", array);
console.log("array length : ", array.length);

/** 
array.filter((item) => {
    console.log(item)
}); */


array.filter((item) => {
    if (item === 4) {
        console.log(item)
    }
});