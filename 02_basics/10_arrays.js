const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)// flat means complex array to simple arrays
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))// isArray means array haga ke nhi os nu pta karn lie use karde haa
console.log(Array.from("Hitesh"))   // from means gave any string,object,or other datatype int directly convert into arrays
console.log(Array.from({name: "hitesh"})) // interesting case(dasna pheda haa value or key nu karna)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// of means make element in list