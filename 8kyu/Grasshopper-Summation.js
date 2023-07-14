/*Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)*/


//my solution
var summation = function (num) {
    let a = 0;
    let soma = 0;
    for (let i = 0; i <= num; i++){

        a++;


    }
    soma = num*(a/2)
    return soma;
}


  summation(8);