const PENDING = 'PENDING';  // 等待
const RESOLVED = 'RESOLVED'; // 成功
const REJECTED = 'REJECTED'; // 失败

class Promise {
    //  1、看这个属性 是否在原型上使用
    //  2、看属性是否公用
    constructor(executor) {
        this.state = PENDING;  // 默认是pending 状态
        this.value = undefined; // 成功的值
        this.reason = undefined; // 失败的原因

        this.onResolvedCallbacks= [];  // 成功的回调的数组
        this.onRejectedCallbacks= [];  // 失败的回调的数组
        // 成功函数
        let resolve = (value) => {
            // 屏蔽调用的
            console.log(121212)
            if (this.state === PENDING) {
                this.value = value;
                this.state = RESOLVED;
                this.onResolvedCallbacks.forEach(fn=>fn());  // 发布
            }
        }
        // 失败函数
        let reject = (reason) => {
            if (this.state === PENDING) {
                this.reason = reason;
                this.state = REJECTED;
                this.onRejectedCallbacks.forEach(fn=>fn());  // 发布
            }
        }
        try {
            executor(resolve, reject); // 默认执行器会立即执行    
        } catch (error) {
            reject(error); // 如果执行时发生错误 等价调用了失败方法
        }
       
    }

    then(onfulfilled, onrejected) {  // then 目前有两个参数
        if(this.state === RESOLVED) {
            onfulfilled(this.value);
        }
        if(this.state === REJECTED) {
            onrejected(this.reason);
        }

        //  使用发布订阅处理异步
        if(this.state === PENDING) {
            this.onResolvedCallbacks.push(()=>{  // 重写push方法的时候
                // todo...
                onfulfilled(this.value);
            })
            this.onRejectedCallbacks.push(()=>{
                onrejected(this.value);
            })
        }
    }
}

module.exports = Promise;