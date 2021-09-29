const a = prompt("Enter any value of x: ");
const b = prompt("Enter any value of y: ");
let x = parseInt(a);
let y = parseInt(b);

function myFunction (x,y){ //parameter
    let z = x + y;
    console.log(`${x} + ${y} = ${z}`);
    document.writeln(`${x} + ${y} = ${z}`);
}

//Call function
myFunction(x,y); //Argument