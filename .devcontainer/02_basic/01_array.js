// Array

const myArr=[10,20,30,40,50]
const myHero=["ironman","Jakeman"]

const myArr2=new Array(77,56,94)
// console.log(myArr[2])
// console.log(myHero[1]);

// myArr.push(26)
// myArr.pop()
// myArr.unshift(55) //It's work as the Push opreation
// myArr.shift()     //It's work as the Pop operation in the shift operation top element is deleted

// console.log(myArr.includes(20));
// console.log(myArr.indexOf(8));

// const newArr=myArr.join() // the join operation is converted the array into the string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);




