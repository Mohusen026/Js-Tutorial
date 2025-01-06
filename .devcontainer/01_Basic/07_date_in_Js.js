// dates

let mydate=new Date()
// console.log(mydate.toString())
// console.log(mydate.toISOString());
// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);


// let myCreatedDate=new Date(2025,6,19)
// let myCreatedDate=new Date(2025,6,19,19,5)
// console.log(myCreatedDate.toLocaleString());


let myCreatedDate=new Date("07-8-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate =new Date()
// console.log(newDate.getMonth()); // In the Javascipt the the Month is started with the 0 by default
console.log(newDate.getDate());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getDay());

newDate.toLocaleString('default',
    {
        weekday:"long",
    })