const preorderTraverse = (node, array) => {
  // add current node to array
  // check if left child, preorder traverse left
  // repeat on the right
  // return array
  // ? set array each time
  array.push(node.value)
  if (node.left) {
    preorderTraverse(node.left, array)
  }
  if (node.right) {
    preorderTraverse(node.right, array)
  }
  return array
  // code goes here
}

const inorderTraverse = (node, array) => {
  // traverse tree
  // if node has no left child, push value
  // then check right child
  // then push value
  // return array

  if (node.left) {
    inorderTraverse(node.left, array)
  }
  array.push(node.value)
  if (node.right) {
    inorderTraverse(node.right, array)
  }
  return array
  // code goes here
}

const postorderTraverse = (node, array) => {
  if (node.left) {
    postorderTraverse(node.left, array)
  }
  if (node.right) {
    postorderTraverse(node.right, array)
  }
  array.push(node.value)
  return array
  // code goes here
}

// unit tests
// do not modify the below code
describe('depth-first traversals', function () {
  const tree = {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null,
          },
        },
      },
    },
    right: {
      value: 12,
      left: {
        value: 10,
        left: {
          value: 9,
          left: null,
          right: null,
        },
        right: {
          value: 11,
          left: null,
          right: null,
        },
      },
    },
  }

  it('preorderTraverse', () => {
    expect(preorderTraverse(tree, [])).toEqual([
      8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11,
    ])
  })

  it('inorderTraverse', () => {
    expect(inorderTraverse(tree, [])).toEqual([
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ])
  })

  it('postorderTraverse', () => {
    expect(postorderTraverse(tree, [])).toEqual([
      2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8,
    ])
  })
})
