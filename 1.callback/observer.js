// vue 特点 数据变化 更新视图 监控数据的变化 数据变化后需要更新视图

// 被观察者
class Subject { // 我家琦宝

    constructor(name) {
        this.state = name;
        this.arr=[];
    }
    attach(o){
        this.arr.push(o);
    }
    setState(newState) {
        this.arr.forEach(o=>o.updated(newState, this.state))
    }
}

// 观察者
class Observer { // 我
    constructor(name) {
        this.name= name;
    }
    updated(newState, state) {
        console.log(`${this.name}:${state}的状态是${newState}`);
    }
}

let s = new Subject('琦宝宝');
let o1 = new Observer('我');
let o2 = new Observer('还是我');
s.attach(o1);
s.attach(o2);
s.setState('不开心')
s.setState('开心')