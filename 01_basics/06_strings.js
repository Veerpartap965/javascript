const name="veerpartap"
const repoCount=7
console.log(name+repoCount+"value");

console.log(`my name is ${name} and my repoCount is${repoCount}`);

const gameName=new String('veerpartap')
console.log(gameName[0]);
console.log(gameName.__proto__);  // gave objects eg{}
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('e'));
console.log(gameName.toUpperCase());
 const stringNew=gameName.substring(1,3);
//  const stringNew=gameName.substring(-6,3); // -6 nal koi change ne means no reverse
console.log(stringNew);
const anotherName1=new gameName.slice(0,4) 
const anotherName=new gameName.slice(-8,4) 
const anotherNameone="     veer    " 
console.log(anotherNameone);
console.log(anotherNameone.trim());

const url="https://veerpartap.com/veer%20singh"
console.log(url.replace('%20','_'));

console.log(url.includes('veerpartap'));   /// includes use for koi chij aa jo asi pushye aa

console.log(url.includes('wow')); 

console.log(gameName.split('_'));






