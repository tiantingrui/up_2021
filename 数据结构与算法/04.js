// 快慢指针 - 删除链表的倒数第N个结点

const removeNthFromEnd = function(head, n) {
    // 初始化 dummy 结点
    const dummy = new ListNode()
    // dummy 指向头结点
    dummy.next = head
    // 初始化快慢指针, 均指向 dummy
    let fast = dummy
    let slow = dummy

    // 快指针先走 n 步
    while(n !== 0) {
        fast = fast.next
        n--
    }

    // 快慢指针一起走
    while(fast.next) {
        fast = fast.next
        slow = slow.next
    }

    // 慢指针删除自己的后继结点
    slow.next = slow.next.next

    return dummy.next
}


// 多指针 - 完全反转链表

const reverseList = function(head) {
    // 初始化前驱结点为 null
    let pre = null
    // 初始化目标结点为 头结点
    let cur = head
    // 只要目标结点不为null ， 遍历就得继续
    while (cur !== null) {
        // 记录一下next 结点
        let next = cur.next
        // 反转指针
        cur.next = pre
        // pre 往前走一步
        pre = cur
        // cur 往前走一步
        cur = next
    }
    // 反转结束后， pre 就会变成新链表的头结点
    return pre
}

// 多指针 -  局部反转
const reverseBetween = function(head, m ,n) {
    // 定义pre, cur, 用LeftHead 来承接整个区间的前驱结点
    let pre, cur, leftHead
    // 别忘了用 dummy
    const dummy = new ListNode()
    // dummy 后继结点是头结点
    dummy.next = head
    // p 是一个游标，用于遍历，最初指向 dummy
    let p = dummy
    // p 往前走 m - 1 步，走到整个区间的前驱结点处
    for (let i= 0; i < m -1; i ++) {
        p = p.next
    }
    // 缓存这个前驱结点到 leftHead 
    leftHead = p 
    // staet 是反转区间的第一个结点
    let start = leftHead.next
    // pre 指向 start
    pre = start
    // cur 指向start 的下一个结点
    cur = pre.next
    // 开始反转动作
    for (let i = m; i < n; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    // leftHead 的后继结点此时为反转后的区间的第一个结点
    leftHead.next = pre
    // 将区间内反转后的最后一个结点 next 指向 cur
    start.next = cur
    // dummy.next 永远指向链表头结点
    return dummy.next
}