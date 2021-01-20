# Vue 原理 - 总结



+ 组件化
+ 响应式
+ vdom 和 diff
+ 模板编译
+ 渲染过程
+ 前端路由





### 组件化

+ 组件化的历史
+ 数据驱动视图
+ MVVM





### 响应式

+ Object.defineProperty()
+ 监听对象（深度），监听数组
+ Object.defineProperty 的缺点（Vue3用proxy）
  + 深度监听，会一次性递归，影响性能
  + 不能增加对象属性，删除属性（所以有了 Vue.set Vue.delete）
  + 不能监听数组





### vdom 和 diff

+ 应用背景
+ vnode 结构
+ snabbdom 使用： vnode  h patch 





### 模板编译

+ with 语法
+ 模板编译为render 函数
+ 执行 render 函数生成 vnode



### 组件渲染/更新过程

+ 初次渲染
+ 更新过程
+ 异步渲染



### 前端路由原理

+ hash 
+ H5 histtory
+ 两者对比



