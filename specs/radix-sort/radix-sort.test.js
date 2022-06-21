/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/
function getLongestNumber(array) {
  let length = 0
  for (let digit of array) {
    if (String(digit).length > length) length = String(digit).length
  }
  return length
}

function getDigit(number, place, longestNumber) {
  if (String(number).length <= place) return 0
  return Number(String(number)[String(number).length - 1 - place])
}
function radixSort(array) {
  const longest = getLongestNumber(array)
  let bucket = [[], [], [], [], [], [], [], [], [], []]
  let current = [...array]
  for (let i = 0; i < longest; i++) {
    // console.log(i)
    for (let j = 0; j < current.length; j++) {
      // console.log(j)
      const placement = getDigit(current[j], i, longest)

      bucket[placement].push(current[j])
      // console.log(bucket)
    }

    current = bucket.reduce((prev, curr) => {
      return prev.concat(curr)
    }, [])
    bucket = [[], [], [], [], [], [], [], [], [], []]
    // bucket = new Array(10).fill([])
  }
  // code goes here
  // figure our longes number
  // write function to push into array based on place
  return current
}

// unit tests
// do not modify the below code
describe('radix sort', function () {
  it('should sort correctly', () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ]
    const ans = radixSort(nums)
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ])
  })
  it('should sort 99 random numbers correctly', () => {
    const fill = 99
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000))
    const ans = radixSort(nums)
    expect(ans).toEqual(nums.sort((a, b) => a - b))
  })
})
