type SumType = (x: number, y: number) => number

let sum: SumType
const rst2 = sum(2, 3) 

type StrOrNumber = string | number

// 字符串字面量
type Directions = 'Up' | 'Down' |   'Left' | 'Right'
let toWhere: Directions = 'Up'

// 交叉类型 intersection Types
interface IName {
    name: string;
}

type IPerson = IName & {age: number}
let person: IPerson = {
    name: '123',
    age: 25
}