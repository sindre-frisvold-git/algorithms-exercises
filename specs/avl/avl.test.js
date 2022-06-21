/*
  AVL Tree
  
  Name you class/function (anything we can call new on) Tree
  
  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we 
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.
  
  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.
  
  If you have any questions conceptually about balancing the tree, refer to the class website.
  
  Make sure you are calling the properties
  of the Nodes as follows:
  value - integer - the value being store in the tree
  left  - Node    - the subtree containing Node's with values less than the current Node's value
  right - Node    - the subtree containing Node's with values greater than the current Node's value

*/

class Tree {
  constructor() {
    this.root = null
  }
  add(value) {
    if ((this.root = nuill)) {
      this.root = new Node(value)
    } else {
      const path = []
      let depth = 0
      let current = this.root
      // check if value is greater or lower.
      // place in right or left if larger or smaller
      // if right or left does not exist, create and place value
      // else continue loop and add one to depth
      while (true) {
        path.push(current)
        if (current.value < value) {
          // go right
          if (current.right) {
            current = current.right
            depth++
          } else {
            current.right = new Node(value)
            break
          }
        } else {
          // go left
          if (current.left) {
            current = current.left
            depth++
          } else {
            current.left = new Node(value)
            break
          }
        }
      }
      // check for imbalance here
      // insert rotate logic here
    }
  }
  _checkBalance(path) {
    for (let i = path.length - 1; i > 0; i--) {
      console.log(this._checkDepth(path[i]))
    }
    // start at end of path, check balance
    // ? recursive call
  }
  _checkDepth(node) {
    // checks depth of a diven node
    if (!node.left && !node.right) return 0
    if (!node.left) return this._checkDepth(node.right) + 1
    if (!node.right) return this._checkDepth(node.left) + 1
    const left = this._checkDepth(node.left)
    const right = this._checkDepth(node.right)
    return left < right ? right + 1 : left + 1
  }
  _rotate() {}
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
  // code also goes here
}

// unit tests
// do not modify the below code
describe.skip('AVL Tree', function () {
  test('creates a correct tree', () => {
    const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8]
    const tree = new Tree()
    nums.map((num) => tree.add(num))
    const objs = tree.toObject()

    expect(objs.value).toEqual(4)

    expect(objs.left.value).toEqual(2)

    expect(objs.left.left.value).toEqual(1)
    expect(objs.left.left.left).toBeNull()
    expect(objs.left.left.right).toBeNull()

    expect(objs.left.right.value).toEqual(3)
    expect(objs.left.right.left).toBeNull()
    expect(objs.left.right.right).toBeNull()

    expect(objs.right.value).toEqual(7)

    expect(objs.right.left.value).toEqual(6)
    expect(objs.right.left.right).toBeNull()

    expect(objs.right.left.left.value).toEqual(5)
    expect(objs.right.left.left.left).toBeNull()
    expect(objs.right.left.left.right).toBeNull()

    expect(objs.right.right.value).toEqual(9)

    expect(objs.right.right.left.value).toEqual(8)
    expect(objs.right.right.left.left).toBeNull()
    expect(objs.right.right.left.right).toBeNull()

    expect(objs.right.right.right.value).toEqual(10)
    expect(objs.right.right.right.left).toBeNull()
    expect(objs.right.right.right.right).toBeNull()
  })
})
