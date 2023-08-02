/*Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata*/



function getMax1()
{
  const max = 
  {
   name : 'Max Headroom'
  }
  console.log(max.name)
}

function getMax2() { 
    let name =  'Max Headroom'
    //return name;
    console.log(name)
}

getMax1();
getMax2();


//soluction

function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2() {
  return {
    name: 'Max Headroom'
  };
}
