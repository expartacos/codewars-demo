function tf(arguments){

    let args = Array.prototype.slice.call(arguments);
    let temp = args[0];
    args[0] = args[1];
    args[1] = temp;
    console.log(args);
}

tf([1,2]);


const tf = (a) => a.reverse();