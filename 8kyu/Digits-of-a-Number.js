function getSumOfDigits(integer) {
    var sum = 0;
    var digits =  Math.floor(integer).toString();
    console.log(digits);
    for(var ix = 0; ix < digits.length; ix++) { 
      sum += +digits[ix];
      console.log(sum);
    }
  };

  getSumOfDigits(1234);