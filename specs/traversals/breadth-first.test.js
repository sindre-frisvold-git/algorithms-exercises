const breadthFirstTraverse = (queue, array) => {
  // take first item in queue
  if (!queue.length) return array
  const node = queue.shift()
  array.push(node.value)
  if (node.left) {
    queue.push(node.left)
  }
  if (node.right) {
    queue.push(node.right)
  }
  return breadthFirstTraverse(queue, array)
  // add value to array
  // add left and right child to queue
  // shift array and call recursion on returned node
  // fill code in here
}

// unit tests
// do not modify the below code
describe('breadth-first tree traversal', function () {
  const answer = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

  const tree = {
    value: 'A',
    left: {
      value: 'B',
      left: {
        value: 'D',
        left: {
          value: 'G',
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: 'E',
        left: null,
        right: {
          value: 'H',
          left: {
            value: 'K',
            left: null,
            right: null,
          },
        },
      },
    },
    right: {
      value: 'C',
      left: {
        value: 'F',
        left: {
          value: 'I',
          left: null,
          right: null,
        },
        right: {
          value: 'J',
          left: null,
          right: null,
        },
      },
      right: null,
    },
  }

  test('breadthFirstTraverse', () => {
    expect(breadthFirstTraverse([tree], [])).toEqual(answer)
  })
})
