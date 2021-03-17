const PENDING = 'pending';  // 等待
const FULFILLED = 'fulfilled'; // 成功
const REJECTED = 'rejected';   // 失败

class MyPromise {
    constructor(executor) {
        try {
            executor(this.resolve, this.reject);
        } catch (e) {
            this.reject(e);
        }
    }
    // promise 状态
    status = PENDING;
    // 成功之后的值
    value = undefined;
    // 失败之后的值
    reason = undefined;
    // 成功回调
    // successCallBack = undefined; // 单次调用
    successCallBack = []; // 多次调用用于存储
    // 失败回调     
    // failCallback = undefined;
    failCallback = [];
    resolve = value => {
        // 如果状态不是等待 阻止程序向下执行
        if (this.status !== PENDING) return;
        // 将状态更改为成功
        this.status = FULFILLED;
        // 保存成功之后的值
        this.value = value;
        // 判断成功回调是否存在 如果存在 调用
        // this.successCallBack && this.successCallBack(this.value);  
        while (this.successCallBack.length) this.successCallBack.shift()();
    }
    reject = reason => {
        // 如果状态不是等待 阻止程序向下执行
        if (this.status !== PENDING) return;
        // 将状态更改为失败
        this.status = REJECTED;
        // 保存失败之后的原因
        this.reason = reason;
        // 判断失败回调是否存在 如果存在 调用
        // this.failCallback && this.failCallback(this.reason);
        while (this.failCallback.length) this.failCallback.shift()();
    }
    then(successCallBack, failCallback) {
        let promise2 = new MyPromise((resolve, reject) => {
            // 判断状态
            if (this.status === FULFILLED) {
                setTimeout(() => {  // 异步的原因是获取promise2
                    try {
                        //  x 拿到上个then的返回值
                        let x = successCallBack(this.value);
                        //  判断x 的值是普通值还是promise对象
                        // 如果是普通值 直接调用resolve
                        // 如果是promise对象 查看promise对象返回的结果
                        // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
                        //    resolve(x);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0)
            } else if (this.status === REJECTED) {
                setTimeout(() => {  // 异步的原因是获取promise2
                    try {
                        //  x 拿到上个then的返回值
                        let x = failCallback(this.reason);;
                        //  判断x 的值是普通值还是promise对象
                        // 如果是普通值 直接调用resolve
                        // 如果是promise对象 查看promise对象返回的结果
                        // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
                        //    resolve(x);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0)
            } else {
                // 等待
                // 将成功回调和失败回调存储起来
                // this.successCallBack = successCallBack;
                // this.failCallback  = failCallback;
                // 如果多次调用then
                this.successCallBack.push(() =>{
                    setTimeout(() => {  // 异步的原因是获取promise2
                        try {
                            //  x 拿到上个then的返回值
                            let x = successCallBack(this.value);
                            //  判断x 的值是普通值还是promise对象
                            // 如果是普通值 直接调用resolve
                            // 如果是promise对象 查看promise对象返回的结果
                            // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
                            //    resolve(x);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0)
                });
                this.failCallback.push(()=>{
                    setTimeout(() => {  // 异步的原因是获取promise2
                        try {
                            //  x 拿到上个then的返回值
                            let x = failCallback(this.reason);;
                            //  判断x 的值是普通值还是promise对象
                            // 如果是普通值 直接调用resolve
                            // 如果是promise对象 查看promise对象返回的结果
                            // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
                            //    resolve(x);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0)
                });
            }
        });
        return promise2;
    }

}

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
    }
    if (x instanceof MyPromise) {
        // promise 对象
        // x.then(value => resolve(value), reason => reject(reason));
        x.then(resolve, reject);
    } else {
        // 普通值
        resolve(x);
    }
}

module.exports = MyPromise;