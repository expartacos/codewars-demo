function cookie(x){
    // ...
    if ( typeof(x) == 'number'){
      return "monica";
    }
    else if ( typeof(x) == 'string'){
      return "zack";
    }
    else{
      return "cachorro";
    }

  }

  console.log(cookie("b"));