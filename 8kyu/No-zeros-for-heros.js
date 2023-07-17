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