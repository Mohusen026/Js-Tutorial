// Immediately Invoked Function Expressions (IIFE)

// function code(){
//     console.log("Database Connected");    
// }
// code()  //normal function

// --------------------IIFE---------------------------

(function code()
{
    console.log("Connected");    
})();

// ========== imp for IIFE  =>    global scope ke pollution se problem hoti hai kai bar aur us global variable se bachne ke liye IIFE kaa used karte hai


//Most Imp to check at 5:07 video24 for the instruction of the [;] used of the semicolon 
// agar aap IIFE more than one time used karte ho tu calling function ke bad ; compulsary used karna padega karna vo aapko error throw karega function
(function code()
{
    console.log("Connected Two");    
})();

(()=>
{
    console.log("Connected Three");    
})();

((name)=>
    {
        console.log(`Welcome to the Impero IT Service ${name}`);    
    })("Haji Mohammadhusen")