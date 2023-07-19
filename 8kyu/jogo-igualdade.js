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
  