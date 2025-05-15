//Return Length of Arguments Passed
var argumentsLength = function(...args) {
    //return args.length}
    let count = 0;
    for(let i=0;i<args.length;i++){
        count++;
    }
    return count;
};