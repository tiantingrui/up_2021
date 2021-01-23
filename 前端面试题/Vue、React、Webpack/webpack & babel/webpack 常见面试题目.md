# topic

#### 1. 前端为何要进行打包和构建？



**代码层面**

+ 体积更小（tree-shaking、压缩、合并），加载更快
+ 编译高级语言或语法（ts、es6+、模块化，scss）
+ 兼容性和错误检查（polyfill、postcss、eslint）



**研发流程方面**

+ 统一、高效的开发环境
+ 统一的构建流程和产出标准
+ 集成公司构建规范（提测、上线等）



#### 2. Module chunk bundle 的区别

+ module - 各个源码文件，webpack 中一切皆模块
+ chunk - 多模块合并成的，如 entry import() splitChunk
+ bundle - 最终的输出文件





#### 3. loader 和plugin 的区别

+ loader 模块转换器，如 less -> css
+ plugin 扩展插件、如 html-webpack-plugin 



#### 4. 常见 loader 和 plugin 有哪些





#### 5. babel 和webpack 区别

+ babel - js 新语法编译工具，不关心模块化
+ webpack - 打包构建工具，是多个 loader plugin 的集合



#### 6. 如何产出一个 lib

+ 参考 webpack.dll.js
+ output.library

```js
output: {
  // lib 的文件名
  filename: 'lodash.js',
  // 输出 lib到 dist 目录下
  path: distPath,
  // lib的全局变量名
  library: 'lodash'
}
```



#### 7. Babel-polyfill 和 babel-runtime的区别

+ Babel-polyfill 会污染全局
+ Babel-runtime 不会污染全局
+ 产出第三方 lib 要用 babel-runtime



#### 8.webpack 如何实现 懒加载

+ import()
+ 结合 vue react 异步组件
+ 结合 Vue-router React-router 异步加载路由



#### 9.为何Proxy 不能被 polyfill？

+ 如class 可以用function 代替
+ promise 可以被 callback 代替
+ 但 proxy 的功能无法用 object.defineproperty 去模拟





### 10.webpack 优化构建速度

