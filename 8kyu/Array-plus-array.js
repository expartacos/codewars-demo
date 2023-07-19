/*I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.*/


function arrayPlusArray(arr1, arr2) {
    var s1 = arr1.reduce(function(soma, i){return soma + i})
    var s2 = arr2.reduce(function(soma, i){return soma + i})
    
    return s1 + s2;
}