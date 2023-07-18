function sc(floor){
    let grito = "Aa~ ";
    if (floor <= 1){
      return "";
    }
    else if(floor <= 6){
    return grito.repeat(floor - 1) +"Pa! Aa!";
    }else if( floor > 6){
        console.log( grito.repeat(floor - 1) +"Pa!");
    }

  }
  sc(7)