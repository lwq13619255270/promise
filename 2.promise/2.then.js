// 1） （then中传递的函数）判断成功和失败函数的返回结果
// 2） 判断是不是promise 如果是promise 就采用它的状态
// 3）如果不是promise 直接将结果传递下去即可

// let Promise = require('./promise');

let p = new Promise((resolve, reject) => {
    resolve();
});

p.then(data => {
    return 1000;
}).then(data => {
    console.log(data);
})