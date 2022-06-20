/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

function nestedAdd(array, tally = 0) {
  // write code here
  // base case number

  for (key of array) {
    if (typeof key === 'number') tally += key
    if (key instanceof Array) tally = nestedAdd(key, tally)
  }

  return tally
  // for (let i = 0; i < array.length; i++) {
  //   return tally + nestedAdd(array[i], tally)
  // }
  // if there is an array, call recursivd function on it
  // if there is a number return the number.
}

test('nested arrays addition', () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6)
  expect(nestedAdd([1, [2], 3])).toEqual(6)
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5)
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94)
})
