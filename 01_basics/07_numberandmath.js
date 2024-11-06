const score =400
console.log(score);
const balance =new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const anotherno=123.464
console.log(anotherno.toPrecision(3));

// usa style nal
const fifa=10000000
console.log(fifa.toLocaleString());
//indianstylenal
const fife=10000000
console.log(fife.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++++Math++++++++++++++++++++++++++++++++++++

console.log(Math);   // it is a object {}
console.log(Math.abs(-4));  // absolute value behave like aa mode||
console.log(Math.round(4.6));// round  means es value de ale dhule 
console.log(Math.ceil(4.1));// ceil means 4.1 ta 5 wavega because it always choose upper value
console.log(Math.floor(4.9));// floor 4.9 tabhi lower value choose karega
console.log(Math.sqrt(4));
console.log(Math.min(4,3,2,6));
console.log(Math.max(4,3,2,6));
console.log(Math.random()); // it always gaverandom value b/w 0,1 vich te 0,1 vi de sakda aa
console.log(Math.random()*10+1);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
const min=10
const max=20
console.log(Math.floor(Math.random()*max+min-1)+min);
