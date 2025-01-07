// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if (element==5) {
//         // console.log("these is the my favourite number");        
//     }    
//     // console.log(element);    
// }


// for (let i = 1; i <=10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <=10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);   
//         // console.log(`${i} * ${j} = ${i*j}`);                   
//     }
// }


// let newArray=["Impero","Google","Micron","Hyperkin","Amazon"]
// // console.log(newArray.length);

// for (let index = 0; index < newArray.length; index++) {
//     const element = newArray[index];
//     // console.log(element);        
// }

// ----------------------agar hum index <= newArray.length; <= used karege tu vo last index par undefined print karega please check at 17:50 video 27-------------------------------






// **************************  break and continue ***********************************
// for (let i = 1; i<= 10; i++) {
//     if (i==5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`);    
// }


for (let i = 1; i<= 10; i++) {
    if (i==5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);    
}