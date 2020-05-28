// promise的特点

// 承诺 我答应你... promise 是一个类

//  1) 里面有三个状态 等待态（默认）  成功态  失败态 一旦成功了就不能失败 反之一样

// resolve 代表的是成功  reject 代表的是失败
//  2)  每个promise 实例都有一个then方法
//  3)  如果new Promise 的时候 报错了 会变成失败态 (抛错也算失败)


let Promise =require('./promise')
let promise = new Promise((resolve, reject) => { // executor 执行器
    // setTimeout(() => {
        // throw new Error('失败');
        console.log("立即执行")
        reject("123")
        resolve("hello");
    // })  
})
promise.then(data => {
    console.log(data);
}, err => {
    console.log("err", err)
})
console.log("谁先执行", promise.prototype)


// then 的用法