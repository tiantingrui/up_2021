const arr = [10, 20, 30, 40]

// pop
// const popRes = arr.pop() // 返回删除的元素 - 40
// console.log(popRes, arr) // 40 [10, 20, 30]

// push
// const pushRes = arr.push(50) // 返回length - 5
// console.log(pushRes, arr) // 5 [10, 20, 30, 40, 50]

// unshift
// const unshiftRes = arr.unshift(5) // 返回length -5
// console.log(unshiftRes, arr) // 5 [5, 10, 20, 30, 40]

// shift
// const shiftRes = arr.shift() // 返回删除的元素 - 10
// console.log(shiftRes, arr)  // 10 [20, 30, 40]

// 数组的API , 有哪些是纯函数
// 纯函数：1.不改变原数组（没有副作用） 2. 返回一个新的数组
// concat map filter slice

// slice 纯函数

// splice 非纯函数
const spliceRes = arr.splice(1, 2, 'a', 'b', 'c') // [20, 30] 
console.log(spliceRes, arr) // [20, 30] [10, 'a', 'b', 'c', 40]


[10, 20, 30].map(parseInt)

[10, 20, 30].map((item, index) => {
    return parseInt(item, index)
})

