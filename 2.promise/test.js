class Test {
    constructor(executor) {
        this.value ="lwq";
        let resolve =() => {
            console.log('执行了')
        }
        executor(resolve);
    }
}

let test = new Test((resolve)=>{
    console.log("立即执行")
    resolve('123')
});