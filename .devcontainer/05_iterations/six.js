// const myCoding=["js","ruby", "python", "cpp","java"]

// const values=myCoding.forEach( (item) => {
//     console.log(item);    
// })

// const myNums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// // const newNums = myNums.filter( (num) => num > 12 )

// const newNums = myNums.filter( (num) => {
//     return n>12
// } )
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks= books.filter( (bk) => bk.genre==="Science" )

let userBooks1=books.filter( (bk1) => bk1.publish>=2000)

let userBook2=books.filter( (bk2) =>
{
    return bk2.publish>1995 && bk2.genre==="History"
})
// console.log(userBooks);

console.log(userBook2);
