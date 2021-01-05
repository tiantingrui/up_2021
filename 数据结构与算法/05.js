// 1. 栈 - 有效括号

// 用一个 map 来维护左括号和右括号的对应关系
const leftToRight = {
    "(": ")",
    "[": "]",
    "{": "}"
}

const isValid = (s) => {
    // 题目说 空字符串也可以
    if (!s) {
        return true
    }
    const stack = []

    // 缓存字符串长度
    const len = s.length
    // 遍历整个字符串
    for(let i = 0; i < len; i++) {
        // 缓存单个字符
        const ch = s[i]
        // 判断是否是左括号, 是的话推进 stack
        if(ch === '(' || ch === '[' || ch === '{') {
            stack.push(leftToRight[ch])
        }
         else { // 若不是左括号，则必须是和栈顶的左括号相配对的右括号
            if (!stack.length || stack.pop() !== ch) {
                // 栈为空或者栈顶的元素与当前的右括号没匹配上则 false
                return false
            }
        }
    }
     // 若所有的括号都能配对成功，那么最后栈应该是空的
    return !stack.length
}


const compare = (s) => {
    if (!s) return true
    const stack = []

    const len = s.length

    for (let i = 0; i < len; i ++) {
        const ch = s[i]

        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(leftToRight[ch])
        } else {
            if (!stack.length || stack.pop() !== ch) {
                return false 
            }
        }
    }
    return !stack.length
}