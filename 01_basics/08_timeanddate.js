// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate2= new Date("2023-01-14")
let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());


let myTimeStamp = Date.now() 
console.log(myTimeStamp);  // that time calculated from 1 jan 1870
console.log(myCreatedDate.getTime());
console.log((Date.now()/1000));
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `//    string interpolation

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone:'America/New_York',
})