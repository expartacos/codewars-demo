function solution(str, ending){
  if(str.substring(str.length -2) === ending){
    return true;
  }else{
    return false;
  }
}

solution('rafa', 'fa');
console.log(solution('rafa', 'fa'));