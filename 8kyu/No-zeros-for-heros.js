/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway*/



function noBoringZeros(n) {
    let numStr = n.toString();
    numStr = numStr.replace(/0+$/, '');
    if (numStr.endsWith('.')) {
      numStr += '0';
    }
    if(n == 0){
        numStr = 0;
    }
return parseFloat(numStr);
  
  }

  noBoringZeros(111100011100000);