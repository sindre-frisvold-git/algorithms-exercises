/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  // code goes 
  // takes an array, compares 2 inecies, if the first is bigger, swap them
  // if no swaps has been made during the current run, exit
  let swapMade
  while(swapMade = true){
    swapMade = false
    for(let i = 0; i < nums.length; i++){
      if(nums[i] > nums[i+1]){
        let temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
        swapMade = true
      }
    }
  }
  return nums
}

function swap(a, b){
  const temp 
}

// unit tests
// do not modify the below code
test.skip('bubble sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
  const sortedNums = bubbleSort(nums)
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
