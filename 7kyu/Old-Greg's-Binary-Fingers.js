function binaryFingers(binString) {
    let a = binString.split('');
    let subarray =[];
    let newArray = [];
    let b = [];

    if(a.length <= 5 ){
        for(let i = 0; i < 5-a.length; i++){
            subarray.push('0');
        }
        console.log(subarray);
    }

    newArray = [].concat(subarray, a);
    console.log(newArray);

    for(let i in newArray){
        if(newArray[i] === '1'){
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
return b;
}


binaryFingers('11111');