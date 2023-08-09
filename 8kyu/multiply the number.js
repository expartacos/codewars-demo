const multiply = (number)=> a = number * (5**number.toString().length);



console.log(multiply(10));

function mult(num){
    let a = num.toString();
    let b = num * (5**a.length);
    console.log(b);
}
mult(10);