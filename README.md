# promise
安装：node,git vscode 插件 coder runner 运行js   Bracket pair  块级颜色  code spell 检查单词是否拼错

1、掌握高阶函数的使用，使用高阶函数解决异步问题
  回调函数就是高阶函数的的一种
  高阶函数 
    1) 如果函数的参数是一个函数 或者 
    2) 如果一个函数返回了一个函数 (返回函数就是高阶函数)
    AOP(面向切面编程)的主要作用是把一些根核心业务逻辑模块无关的功能抽离出来，其实就是给原函数增加一层，不用管原函数内部实现
2、掌握发布订阅和观察者模式
  
  发布和订阅之间 没有任何的关系

  观察者是有关系的，而且基于发布订阅

3、掌握promise核心应用，使用promise解决异步编程问题
  promise 有三种状态 ： pending resolved rejected

  pending 可以转换成resolved 或rejected

  当状态为resolved 或 rejected 的话，状态不能转变成其他

  一个promise 必须有一个then方法 ，有俩个参数onfulfilled onRejected

4、实现一个完整的promise库

5、扩展promise中最常见方法all,race,finlay..

6、掌握generator的使用以及co库的应用

7、异步终极解决方案async+await