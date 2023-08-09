const multiply = (number)=> number >= 0? a = number * (5**number.toString().length): a = number * (5**(number.toString().length - 1));



console.log(multiply(-2));

function mult(num){
    let a = num.toString();
    let b = num * (5**a.length);
    console.log(b);
}
mult(-10);