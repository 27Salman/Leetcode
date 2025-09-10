//Timeout Cancellation

var cancellable = function(fn, args, t) {
    const timer = setTimeout(fn,t,...args);
    return () => clearTimeout(timer);
};
function mul(str){
    
    return `hello${str}`;
}
const cancel = cancellable(mul,("salman"),1000);
setTimeout(cancel,50);

