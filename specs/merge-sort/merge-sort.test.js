/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if (nums.length < 2) return nums // > does this need to be just a number?
  const pivot = Math.floor(nums.length / 2)
  const split1 = nums.slice(0, pivot)
  const split2 = nums.slice(pivot)
  return merge(mergeSort(split1), mergeSort(split2))
}

function merge(arr1, arr2) {
  const merged = []
  do {
    if (arr1[0] >= arr2[0]) merged.push(arr2.shift())
    if (arr1[0] < arr2[0]) merged.push(arr1.shift())
    if (arr1.length === 0) return merged.concat(arr2)
    if (arr2.length === 0) return merged.concat(arr1)
  } while (arr1.length > 0 && arr2.length > 0)
  return merged
}

// unit tests
// do not modify the below code
test('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
  const ans = mergeSort(nums)
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
