const stack = []
stack.push(1)
stack.push(2)

const item1 = stack.pop()
const item2 = stack.pop()

// 20. 有效的括号
const MATCH_MAP = {
    '(': ')',
    '[': ']',
    '{': '}'
}

const isValid = (s) => {
    if (s.length % 2 === false) {
        return false
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        if (c === '(' || c === '[' || c === '{') {
            stack.push(MATCH_MAP[c])
        } else {
            const t = stack[stack.length - 1]
            if (t === c) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}

// console.log(isValid('()'))
// console.log(isValid('([{}])'))
// console.log(isValid('([{}]])'))


// 函数调用堆栈

const f1 = () => {
    f2()
}
const f2 = () => {
    f3()
}
const f3 = () => {}

f1()