function addLength(str){
    let a = str.split(' ');
    console.log(a);
    let b = [];
    for(let i in a){
        let c = a[i].toString();
        console.log(c.length)
        b.push( a[i] + ' ' + c.length );
    }
    console.log(b);
}

addLength("rafa garcia rafa");