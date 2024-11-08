// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)  // push means value nu add karna
myArr.push(7)
myArr.pop(5)  // pop means value nu remove karna

myArr.unshift(9)  //insert in first of array
myArr.shift() //  remove that element due to unshift

console.log(myArr.includes(9));// it only known that value exist or not
console.log(myArr.indexOf(3));   // if enter unknown value in index itgave -1

const newArr = myArr.join()  // its datatype is string and it also convert into string 

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)// slice means start value and between value are include not end.

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)// splice means Changes the array by adding or removing elements (original array is modified).
console.log("C ", myArr);
console.log(myn2);