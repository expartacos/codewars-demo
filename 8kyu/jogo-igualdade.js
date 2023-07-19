/*Task
Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

Examples (input -> output)
"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false*/



function rafa (s1, s2){
    if(s1 === "" && s2 === ""){
        console.log(false);}
    var str2="";
        for (var i = 0; i < s1.length; i++) {
            var letter = s1.charAt(i);
                        
            if (letter == letter.toUpperCase()) { //se a letra é maiúscula
                str2 += letter.toLowerCase(); //passa pra minuscula
            }
            else if (letter == letter.toLowerCase()) { //se a letra é minúscula
                str2 += letter.toUpperCase(); //então passa pra maiúscula
                }
        }
        
        
        
        
console.log(str2);
    if (str2 == s2 && s2 !== ""){
        console.log(true);
    
    }else if(str2 != s2){
        console.log(false);
    }
}



rafa('', '');


//my soluction 

function isOpposite(s1, s2){
    var str2="";
          for (var i = 0; i < s1.length; i++) {
              var letter = s1.charAt(i);
                          
              if (letter == letter.toUpperCase()) { //se a letra é maiúscula
                  str2 += letter.toLowerCase(); //passa pra minuscula
              }
              else if (letter == letter.toLowerCase()) { //se a letra é minúscula
                  str2 += letter.toUpperCase(); //então passa pra maiúscula
                  }
          }
  
      if (str2 == s2 && s1 != ""){
          return true;
      }if(s1 == "" && s2 == ""){
         return false;
      }else if(str2 != s2){
          return false;
      }
  }
  