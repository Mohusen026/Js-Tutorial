var c =300
let a=300
if (true) {
    let a= 10
    const b= 20
    var c = 30
    // console.log("INNER:",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="husen"
    
    function two(){
        const websit="youtube"
        // console.log(username);  
    }
   
    // console.log (websit) ;
    
    two()
}
one()


if (true) {
    const username="husen"
    if (username==="husen"){
        const website=" youtube"
        // console.log(username + website) ;
    }
// console.log(website);
}
// console.log(username) ;