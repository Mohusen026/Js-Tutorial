const heroes=["spiderman","pravesh","paresh"]
const dc=["batman","superman","flash"]

// heroes.push(dc)  //array in the array push opration is doing and its work on the existing array

// console.log(heroes);
// console.log(heroes[3][0]);


// const allhero=heroes.concat(dc) //the concat is working on the new array
// console.log(allhero);

// const all_new_heros=[...heroes,...dc]
// console.log(all_new_heros);

// const another_arr=[10,5,8,[55,20,985],4,9,88,[48,47,[9,5,11]]]
// console.log(another_arr.flat(Infinity)); //here the flat function is make the multipal array into the single array.We also give the value in the flat funcation basicallyy it indicated that the how many value is give that much of the deep of a array is sloved but if you give the infinity so it can converted into the one array


// console.log(Array.isArray("Husen"));
// console.log(Array.from("Impero")); //here the string is converted into the array
// console.log(Array.from({name:"husen"})); //interesting 14:05


let score1=250
let score2=350
let score3=450

console.log(Array.of(score1,score2,score3));


