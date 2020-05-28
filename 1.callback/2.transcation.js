//  AOP(面向切面编程)的主要作用是把一些根核心业务逻辑模块无关的功能抽离出来，其实就是给原函数增加一层，不用管原函数内部实现

function perform(anyMethod, wrappers){
    wrappers.forEach(wrapper => {
        wrapper.initialize();
    });
    anyMethod();
    wrappers.forEach(wrapper => {
        wrapper.close();
    });
}

perform(function() {
    console.log('say')
},[{ // wrapper1
    initialize() {
        console.log('wrapper1 beforeSay')
    },
    close() {
        console.log('warapper1 closeSay');
    }
},{ // wrapper2
    initialize() {
        console.log('wrapper1 beforeSay')
    },
    close() {
        console.log('warapper1 closeSay');
    }
}
])