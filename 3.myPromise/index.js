
const MyPromise = require('./myPromise')

let promise =  new MyPromise((resolve, reject) =>{
    // setTimeout(() =>{
        resolve('成功');
    // }, 2000)
    // reject('失败');
})

promise.then(value => {
    console.log(value);
}, reason => {
    console.log(reason)
}, reason => {
    console.log(reason)
})

promise.then(value => {
    console.log(value);
    return 100;
}, reason => {
    console.log(reason)
}).then(value =>{
    console.log(value);
})

// promise.then(value => {
//     console.log(value);
// }, reason => {
//     console.log(reason)
// })