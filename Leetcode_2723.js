// Add Two Promises

const promise1 = new Promise(resolve => setTimeout(()=>resolve(2),20));
const promise2 = new Promise(resolve => setTimeout(()=>resolve(5),50));


var addTwoPromises = async function(promise1, promise2) {
    const a = await promise1;
    const b = await promise2;
    return new Promise(resolve => resolve(a + b))
};
