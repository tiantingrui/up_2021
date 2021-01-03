// 1. 链表的合并

function ListNode(val) {
    this.val = val || null
    this.next = null
}

const mergeTwoLists = function(l1, l2) {
    // 定义头结点，确保链表可以被访问到
    let head = new ListNode()
    // cur 就是那个穿两根线的针
    let cur = head

    while(l1 && l2) {
        // 如果l1的结点值较小
        if (l1.val <= l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next 
        }
        // 针在串起一个结点后，也会往前走一步
        cur = cur.next
    }

    // 处理链表不等长的情况
    cur.next = l1 !== null ? l1 : l2
    // 返回起始结点
    return head.next
}

// 2. 链表结点的删除

const deleteDuplicates = (head) => {
    // 设定cur 指针，初始位置为链表的第一个结点
    const cur = head
    // 遍历链表
    while (cur !== null && cur.next !== null) {
        // 当前结点和下一个结点值相等（重复）就删除
        if (cur.val = cur.next.val) {
            cur.next = cur.next.next
        } else {
            // 若不相等就接着遍历
            cur = cur.next
        }
    }

    return head
}

// 3. 删除问题的延伸 -- dummy结点
const deleteDuplicatesExtend = (head) => {
    // 只有 0 个 或者 1个结点的情况下，直接返回 head
    if (!head || !head.next) {
        return head
    }
    // 创建一个假节点
    let dummy = new ListNode()
    // dummy 永远指向头结点
    dummy.next = head
    // cur 从 dummy 开始遍历
    let cur = dummy
    // 当cur的后面有至少两个结点时
    while(cur.next && cur.next.next) {
        // 对 cur 后面的两个结点进行比较
        if (cur.next.val === cur.next.next.val) {
            // 若值重复，先记下来这个值，看看后面还有没有与这个值重复的结点
            let val = cur.next.val
            // 反复排查后面的元素是否多次重复此值
            while (cur.next && cur.next.val === val) {
                // 如存在，删除即可
                cur.next = cur.next.next
            }
        } else {
            // 若不重复，接着遍历
            cur = cur.next
        }
    }
    // 返回列表的起始结点
    return dummy.next
}