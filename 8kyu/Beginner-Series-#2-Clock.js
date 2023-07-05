/*DESCRIPTION:
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000*/

//my solution


function past(h, m, s){
    let a;
    let b;
    let c; 
    a = h * 60 * 60 * 1000;
    b = m * 60 * 1000;
    c = s * 1000;
    return a + b + c;
  }