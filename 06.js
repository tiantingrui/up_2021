// 先序遍历  根 - > 左 - > 右

// 所有遍历函数的入参都是树的根结点对象
function preOrder(root) {
  // 递归边界， root 为空
  if (!root) {
    return;
  }

  console.log("当前遍历的结点：", root.val);

  // 递归遍历左子树
  preOrder(root.left);
  // 递归遍历右子树
  preOrder(root.right);
}

const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};

preOrder(root)

// 中序遍历 left -> root -> right
function inOrder(root) {
    if (!root) {
        return 
    }

    inOrder(root.left)
    console.log("当前遍历的结点：", root.val)
    inOrder(root.right)
}


// 后序遍历 left -> right -> root

function postOrder(root) {
    if (!root) return 
    postOrder(root.left)
    postOrder(root.right)
    console.log("当前遍历的结点：", root.val)
}