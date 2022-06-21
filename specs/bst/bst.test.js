/*

Binary Search Tree!

Name your class Tree. 

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

*/

// TODO add delete method

class Tree {
  constructor() {
    this.root = null
  }
  add(value) {
    const node = new Node(value)
    if (!this.root) {
      this.root = node
    } else {
      let current = this.root
      // check if value is greater or smaller than current node
      // if value is smaller, go left, if greater, go right
      // if no child exists at pointer, create new node with value
      // set current right or left pointer to new node
      let inserted = false
      while (inserted === false) {
        if (current.value < value) {
          if (current.right) {
            current = current.right
          } else {
            current.right = node
            inserted = true
          }
        } else {
          if (current.left) {
            current = current.left
          } else {
            current.left = node
            inserted = true
          }
        }
      }
    }
    // code goes here
  }
  toObject() {
    return this.root
  }
}

// you might consider using a Node class too
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// unit tests
// do not modify the below code
describe('Binary Search Tree', function () {
  it('creates a correct tree', () => {
    const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8]
    const tree = new Tree()
    nums.map((num) => tree.add(num))
    const objs = tree.toObject()
    console.log(objs)
    // render(objs, nums);

    expect(objs.value).toEqual(3)

    expect(objs.left.value).toEqual(1)
    expect(objs.left.left).toBeNull()

    expect(objs.left.right.value).toEqual(2)
    expect(objs.left.right.left).toBeNull()
    expect(objs.left.right.right).toBeNull()

    expect(objs.right.value).toEqual(7)

    expect(objs.right.left.value).toEqual(4)
    expect(objs.right.left.left).toBeNull()

    expect(objs.right.left.right.value).toEqual(6)
    expect(objs.right.left.right.left.value).toEqual(5)
    expect(objs.right.left.right.left.right).toBeNull()
    expect(objs.right.left.right.left.left).toBeNull()

    expect(objs.right.right.value).toEqual(10)
    expect(objs.right.right.right).toBeNull()

    expect(objs.right.right.left.value).toEqual(9)
    expect(objs.right.right.left.right).toBeNull()

    expect(objs.right.right.left.left.value).toEqual(8)
    expect(objs.right.right.left.left.right).toBeNull()
    expect(objs.right.right.left.left.left).toBeNull()
  })
})
