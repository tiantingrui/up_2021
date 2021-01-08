# TypeScript：进入类型世界



## 原始数据类型和Any 类型

#### 原始数据类型

+ Boolean
+ Null
+ Undefined
+ Number
+ String

```ts
let isDone: boolean = false
let age: number = 12
let firstName: string = 'terry'
let message: string = `hello ${firstName}`

let u: undefined = undefined
let n: null = null

// 注意 undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let num: number = undefined
```



#### any类型

```ts
let notSure: any = 4
notSure = 'maybe a string'
notSure = true
// 对象属性
notSure.aa
// 调用方法
notSure.bb()
```





## Array & Tuple

