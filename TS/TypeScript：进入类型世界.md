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

```js
//最简单的方法是使用「类型 + 方括号」来表示数组：
let arrOfNumbers: number[] = [1, 2, 3, 4]
//数组的项中不允许出现其他的类型：
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
arrOfNumbers.push(3)
arrOfNumbers.push('abc')

// 元祖的表示和数组非常类似，只不过它将类型写在了里面 这就对每一项起到了限定的作用
let user: [string, number] = ['viking', 20]
//但是当我们写少一项 就会报错 同样写多一项也会有问题
user = ['molly', 20, true]
```





## Interface 接口

定义 Object 类型

Duck  Typing （鸭子类型） -  对对象形状（shape）进行描述

```js
interface IPerson {
    readonly id: number; // 只读属性
    name: string;
    age?: number; // 可选属性

}

let terry: IPerson = {
    id: 1,
    name: 'terry',
    age: 12
}
```





## 函数



```ts
// 来到我们的第一个例子，约定输入，约定输出
function add(x: number, y: number): number {
  return x + y
}
// 可选参数
function add(x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}
// 注意：可选参数后面不能再添加参数


// 函数本身的类型
const add2: (x: number, y: number, z?:number) => number = add

// interface 描述函数类型
const sum = (x: number, y: number) => {
  return x + y
}
interface ISum {
  (x: number, y: number): number
}
const sum2: ISum = sum
```





## 类型推论，联合类型和类型断言



Typescript 文档地址：[类型推论 - type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)

[联合类型 - union types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types)

```javascript
// 我们只需要用中竖线来分割两个
let numberOrString: number | string 
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
numberOrString.length
numberOrString.toString()
```

[类型断言 - type assertions](https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions)

```javascript
// 这里我们可以用 as 关键字，告诉typescript 编译器，你没法判断我的代码，但是我本人很清楚，这里我就把它看作是一个 string，你可以给他用 string 的方法。
function getLength(input: string | number): number {
  const str = input as string
  if (str.length) {
    return str.length
  } else {
    const number = input as number
    return number.toString().length
  }
}
```

[类型守卫 - type guard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types)

```javascript
// typescript 在不同的条件分支里面，智能的缩小了范围，这样我们代码出错的几率就大大的降低了。
function getLength2(input: string | number): number {
  if (typeof input === 'string') {
    return input.length
  } else {
    return input.toString().length
  }
}
```



## Class 类

面向对象编程的三大特点

- **封装（Encapsulation）**：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，
- **继承（Inheritance）**：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性。
- **多态（Polymorphism）**：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。

[类 - Class](https://www.typescriptlang.org/docs/handbook/classes.html)

```javascript
class Animal {
  readonly name: string;
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}
const snake = new Animal('lily')

// 继承的特性
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

// 这里我们重写构造函数，注意在子类的构造函数中，必须使用 super 调用父类的方法，要不就会报错。
class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'Meow, ' + super.run()
  }
}
const maomao = new Cat('maomao')
console.log(maomao.run())
```

[类成员的访问修饰符](https://www.typescriptlang.org/docs/handbook/classes.html#public-private-and-protected-modifiers)

- **public** 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
- **private** 修饰的属性或方法是私有的，不能在声明它的类的外部访问
- **protected** 修饰的属性或方法是受保护的，它和 private 类似，区别是它在**子类中也是允许被访问的**



+ **readonly** 只读属性





## 类和接口

+ 继承的困境
+ 类可以使用 `implements` 来实现接口
+ 接口之间也可以继承 用 `extends` 

```ts
interface Radio {
    switchRadio(trigger: boolean): void;
}

interface Battery {
    checkBatteryStatus(): void;
}

class Car implements Radio {
    switchRadio(trigger: boolean) {

    }
}

// 类可以实现多个接口，我们只需要中间用 逗号 隔开就可以
class Cellphone implements Radio, Battery{
    switchRadio(trigger: boolean) {

    }
    checkBatteryStatus() {}
}

// 同时接口之间也可以继承
interface RadioWithBattery extends Radio {
    checkBatteryStatus(): void;
}

class Cellphone2 implements RadioWithBattery {
    switchRadio(trigger: boolean) {}
    checkBatteryStatus() {}
}
```





## 枚举 enum

使用常量枚举会提升性能

```ts
// 数字枚举，一个数字枚举可以用 enum 这个关键词来定义，我们定义一系列的方向，然后这里面的值，枚举成员会被赋值为从 0 开始递增的数字,
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Up)

// 还有一个神奇的点是这个枚举还做了反向映射
console.log(Direction[0])

// 字符串枚举
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
const value = 'UP'
if (value === Direction.Up) {
  console.log('go up!')
}

// 常量枚举
const enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```



## 泛型 Generics

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

```ts
function echo(arg) {
  return arg
}
const result = echo(123)
// 这时候我们发现了一个问题，我们传入了数字，但是返回了 any

function echo<T>(arg: T): T {
  return arg
}
const result = echo(123)

// 泛型也可以传入多个值
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result = swap(['string', 123])
```



## 泛型约束

在泛型中使用`extends`关键字来约束我们传入的条件。

在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法

```ts
function echoWithArr<T>(arg: T): T {
  console.log(arg.length)
  return arg
}

// 上例中，泛型 T 不一定包含属性 length，我们可以给他传入任意类型，当然有些不包括 length 属性，那样就会报错

interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

echoWithLength('str')
const result3 = echoWithLength({length: 10})
const result4 = echoWithLength([1, 2, 3])
```



## 泛型与类和接口

```ts
class Queue {
  private data = [];
  push(item) {
    return this.data.push(item)
  }
  pop() {
    return this.data.shift()
  }
}

const queue = new Queue()
queue.push(1)
queue.push('str')
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())

//在上述代码中存在一个问题，它允许你向队列中添加任何类型的数据，当然，当数据被弹出队列时，也可以是任意类型。在上面的示例中，看起来人们可以向队列中添加string 类型的数据，但是那么在使用的过程中，就会出现我们无法捕捉到的错误，

class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()

//泛型和 interface
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 1, value: "str"}
let kp2: KeyPair<string, number> = { key: "str", value: 123}

// 数组
let arr3: number[] = [1, 3, 4]
let arrTwo: Array<number> = [1, 2, 3]
```



## 类型别名和交叉类型

[类型别名 Type Aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases)

类型别名，就是给类型起一个别名，让它可以更方便的被重用。

```javascript
let sum: (x: number, y: number) => number
const result = sum(1,2)
type PlusType = (x: number, y: number) => number
let sum2: PlusType

// 支持联合类型
type StrOrNumber = string | number
let result2: StrOrNumber = '123'
result2 = 123

// 字符串字面量
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Up'
```

[交叉类型 Intersection Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types)

```javascript
interface IName  {
  name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: 'hello', age: 12}
```



## 声明文件

```.d.ts
declare var jQuery: (selector: string) => any
```



下载三方包的时候顺便下载声明文件

```js
npm install --save @types/jquery
```

[声明文件](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)

[@types 官方声明文件库](https://github.com/DefinitelyTyped/DefinitelyTyped/) [@types 搜索声明库](https://microsoft.github.io/TypeSearch/)

## 内置类型

[内置类型](https://github.com/Microsoft/TypeScript/tree/master/src/lib)

```javascript
const a: Array<number> = [1,2,3]
// 大家可以看到这个类型，不同的文件中有多处定义，但是它们都是 内部定义的一部分，然后根据不同的版本或者功能合并在了一起，一个interface 或者 类多次定义会合并在一起。这些文件一般都是以 lib 开头，以 d.ts 结尾，告诉大家，我是一个内置对象类型欧
const date: Date = new Date()
const reg = /abc/
// 我们还可以使用一些 build in object，内置对象，比如 Math 与其他全局对象不同的是，Math 不是一个构造器。Math 的所有属性与方法都是静态的。

Math.pow(2,2)

// DOM 和 BOM 标准对象
// document 对象，返回的是一个 HTMLElement
let body: HTMLElement = document.body
// document 上面的query 方法，返回的是一个 nodeList 类型
let allLis = document.querySelectorAll('li')

//当然添加事件也是很重要的一部分，document 上面有 addEventListener 方法，注意这个回调函数，因为类型推断，这里面的 e 事件对象也自动获得了类型，这里是个 mouseEvent 类型，因为点击是一个鼠标事件，现在我们可以方便的使用 e 上面的方法和属性。
document.addEventListener('click', (e) => {
  e.preventDefault()
})
```

[Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

Typescript 还提供了一些功能性，帮助性的类型，这些类型，大家在 js 的世界是看不到的，这些类型叫做 utility types，提供一些简洁明快而且非常方便的功能。

```javascript
// partial，它可以把传入的类型都变成可选
interface IPerson {
  name: string
  age: number
}

let viking: IPerson = { name: 'viking', age: 20 }
type IPartial = Partial<IPerson>
let viking2: IPartial = { }

// Omit，它返回的类型可以忽略传入类型的某个属性

type IOmit = Omit<IPerson, 'name'>
let viking3: IOmit = { age: 20 }
```