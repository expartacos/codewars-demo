function waterbombs(fire, w) {
    const dt = fire.split('Y');
    let count = 0;
    for (let i of dt) {
      count += Math.ceil(i.length / w);
      console.log(i.length);
    }
    console.log(count);
  }

waterbombs("xxxxYx", 4);