# JS 进阶 （js - advanced）

+ Event loop
+ Promise 进阶
+ async/await
+ 微任务/宏任务



## Event loop

+ js 是 单线程运行的
+ 异步要基于回调来实现
+ event loop 就是异步回调的实现原理



```js
console.log('hi')
setTimeout(function cb1() {
  console.log('cb1')
})
console.log('Bye')
```



**总结 Event loop 过程**

+ 同步代码，一行一行放在 Call Stack 执行
+ 遇到异步，会先“记录下”，等待时机（定时、网络请求等）
+ 时机到了，就移动到 Callback Queue
+ 如果 CallStack 为空（即同步代码执行完毕），eventloop 开始工作
+ 轮询查找callback Queue，如有则移动到Call Stack 执行
+ 然后继续轮询查找（就像永动机一样）



### DOM事件和event loop

```html
<button id="btn1">提交</button>

<Script>
  console.log('hi')
  $('#btn1').click(function(e) {
    console.log('button clicked')
  })
  console.log('bye')
  </script>
```

+ JS 是单线程的
+ 异步（setTimeout,ajax 等使用回调），基于eventloop
+ DOM 事件也使用回调，基于 Event loop
  + **DOM事件不是异步**



## promise

> 对 callback hell 的解决方案

+ 三种状态
+ 状态的表现和变化
+ then 和 catch 对状态的影响



#### 三种状态

+ pending resolved rejected
+ Pending -> resolved 或者 pending -> rejected
+ 变化不可逆



#### 状态的表现

+ pending状态，不会触发 then 和 catch
+ resolved 状态，会触发后续的then 回调函数
+ rejected 状态，会触发后续的catch 回调函数



#### then 和 catch 改变状态

+ then 正常返回resolved，里面有报错则返回rejected
+ catch 正常返回resolved，里面有报错则返回rejected



## async/await



+ 异步回调 callback hell
+ Promise then catch 链式回调，但也是基于回调函数
+ async/await 是**同步语法**，彻底消灭回调函数











































### topic

+ 请描述 event loop(事件循环/事件轮询)的机制，可画图

+ 什么是微任务/宏任务，两者有什么区别？

+ promise有哪三种状态，如何变化

+ 场景题 - promise then 和 catch 的连接

  ```js
  Promise.resolve().then(() => {
    console.log(1)
  }).catch(() => {
    console.log(2)
  }).then(() => console.log(3))
  // 1 3
  
  
  Promise.resolve().then(() => {
    console.log(1)
    throw new Error('error1')
  }).catch(() => {
    console.log(2) // 返回了一个 resolved 的 promise 后面也会执行 then
  }).then(() => console.log(3))
  // 1 2 3
  
  
  Promise.resolve().then(() => {
    console.log(1)
    throw new Error('error1')
  }).catch(() => {
    console.log(2)
  }).catch(() => console.log(3)) // 这里是catch
  // 1 2
  ```

+ 场景题 - async/await 语法

  ```js
  async function fn() {
    return 100
  }
  (async function() {
    const a = fn() // ??
    const b = await fn() // ??
  }
  )()
  
  
  // 第二题
  (async function(
  	console.log('start')
    const a = await 100
    console.log('a', a)
    const b = await Promise.reslove(200)
    console.log('b', b)
    const c = await Promise.reject(300)
    console.log('c', c)
    console.log('end')
  ) {})() // 打印出哪些内容？
  ```

+ 场景题 - promise 和 setTimeout 的顺序

  ```js
  console.log(100)
  setTimeout(() => {
    console.log(200)
  })
  Promise.resolve().then(() => {
    cnsole.log(300)
  })
  console.log(400)
  ```

+ async/await 的顺序问题

  ```js
  async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
  }
  async function async2() {
    console.log('async2')
  }
  console.log('script start')
  
  setTimeout(function() {
    console.log('setTimeout')
  }, 0)
  
  async1()
  
  new Promise(function (resolve) {
    console.log('promise1')
    resolve()
  }).then(function() {
    console.log('promise2')
  })
  
  console.log('script end')
  ```

  











