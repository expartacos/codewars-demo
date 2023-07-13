function binaryFingers(binString) {









    let b = [];
    let a = binString.split('');
    for(let i in a){
        if(a[i] === '1'){
            switch(i){
                case '4':
                    b.push('Pinkie');
                break;
                case '3':
                    b.push('Ring');
                break;
                case '2':
                    b.push('Middle');
                break;
                case '1':
                    b.push('Index');
                break;
                case '0':
                    b.push('Thumb');
                break;
            }
        }
    }
console.log(a);
}


binaryFingers('11');