function whoIsPaying(name){
    let b = [];
    if (name.length > 2){  
      b.push(name);
      b.push(name.substring(0, 2));
      return b;
    }else {
      b.push(name);
      return b;
    }
  }