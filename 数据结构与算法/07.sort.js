// 冒泡排序
function bubbleSort(arr) {
    const len = arr.length

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr [j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j+1], arr[j]]
            }
        }
    }

    return arr
}

// 改进版本的冒泡实现
function betterBubbleSort(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        // 每次内存循环时的 倒数第 i 个已经最大的了，无需再进行排序
        for (let j = 0; j < len - 1 -i; j ++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+ 1]] = [arr[j + 1], arr[j]]
            }
        } 
    }
    return arr
}

// O(n) 下 的写法 ，O(n) 指的是第一次就是拍好序的数组，如果不是还是 O(n*n)
function bestBubbleSort(arr) {
    const len = arr.length
    for (let i =0; i < len; i ++) {
        let flag = false
        for (let j = 0; j < len - 1 -i; j ++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+ 1]] = [arr[j + 1], arr[j]]
                flag = true
            }
        } 
        if (!flag) return arr
    }
    return arr
}

// 选择排序
function selectSort(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        let minIndex = i
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}
const arr2 = [2, 3, 6, 4, 1]
selectSort(arr2)

// 插入排序
function insertSort(arr) {
    const len = arr.length
    // 用temp 来代表当前需要插入的元素
    let temp
    // i 用于标识每次被插入的元素的索引
    for (let i = 1; i < len; i++) {
        // j 用于帮助 temp 寻找自己应该有的定位
        let j = i
        temp = arr[i]
        // 判断 j 前一个元素是否比 temp 大
        while (j > 0 && arr[j - 1] > temp) {
            // 如果是，则将 j 前面的一个元素后移一位， 为temp 让出位置
            arr[j] = arr[j - 1]      
            j--
        }
        // 循环让位，最后得到的 j 就是 temp 的正确索引
        arr[j] = temp
    }
    return arr
}

// 归并排序
function mergeSort(arr) {
    const len = arr.length
    // 处理边界情况
    if (len <= 1) {
        return arr
    }
    // 计算分割点
    const mid = Math.floor(len / 2)
    // 递归分割左子数组，然后合并为有序数组
    const leftMerge = mergeSort(arr.slice(0, mid))
    // 递归分割右子数组，然后合并为有序数组
    const rightMerge = mergeSort(arr.slice(mid, len))
    // 合并左右两个有序数组
    arr = mergeArr(leftMerge, rightMerge)
    return arr
}

function mergeArr(arr1, arr2) {
    // 初始化两个指针，分别指向arr1 和 arr2
    let i = 0, j =0
    // 初始化结果数组
    const res = []
    
    const len1 = arr1.length
    const len2 = arr2.length
    // 合并两个子数组
    while(i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++ 
        }
    }
    // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
    if (i < len1) {
        return res.concat(arr1.slice(i))
    } else {
        return res.concat(arr2.slice(j))
    }
}