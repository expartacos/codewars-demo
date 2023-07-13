function binaryFingers(binString) {
    let b = [];
    let a = binString.split('');
    for(let i = a.length -1; i >= -1; i--){
        if(a[i] === '1'){
            switch(i){
                case '0':
                    b.push('Pinkie');
                break;
                case '1':
                    b.push('Ring');
                break;
                case '2':
                    b.push('Middle');
                break;
                case '3':
                    b.push('Index');
                break;
                case '4':
                    b.push('Thumb');
                break;
            }
        }
    }
    console.log(b);
    console.log(a);
}


binaryFingers('01');