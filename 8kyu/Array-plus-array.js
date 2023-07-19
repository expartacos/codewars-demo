


function arrayPlusArray(arr1, arr2) {
    var s1 = arr1.reduce(function(soma, i){return soma + i})
    var s2 = arr2.reduce(function(soma, i){return soma + i})
    
    return s1 + s2;
}