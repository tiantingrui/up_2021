function echo<T>(arg: T): T {
    return arg
}

const rst = echo(true)

// 泛型可以 传入多个值

// 调换元祖的顺序
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

const aa = swap(['terry', 25])

function echoWithArr<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

interface IWithLength {
    length: number;
}

let str = echoWithArr('str')
let obj = echoWithArr({length : 1, width: 10})
let arr = echoWithArr([1, 2, 3])

// 泛型与类和接口

class Queue<T> {
    private data = []
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)
// queue.push('terry')
console.log(queue.pop().toFixed())
// console.log(queue.pop().toFixed())

interface KeyPair<T, U> {
    key: T;
    value: U;
}

let kp1: KeyPair<number, string> = {key: 1, value: 'string'}

let arr3: number[] = [1, 3, 4]
let arrTwo: Array<number> = [1, 2, 3]