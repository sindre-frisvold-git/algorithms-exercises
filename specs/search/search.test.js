// for both exercises, the id of the object you're searching for is given to you
// as integer. return the whole object that you're looking for
//
// it's up to you what to return if the object isn't found (we're not testing that)

function linearSearch(id, array) {
  // code goes here
}

function binarySearch(id, arr) {
  // grab id
  // find midway point of array
  // check if midway point is search query
  // if not, check if smaller or bigger
  // slice left or right array
  // repeat until you find item
  // code goes here
  let found = false
  let array = [...arr]
  let item
  while (found === false) {
    let half = Math.floor(array.length / 2)
    checkedId = array[half].id
    if (checkedId === id) {
      found = true
      item = array[half]
    } else if (checkedId > id) {
      array = array.slice(0, half)
    } else {
      array = array.slice(half)
    }
  }
  return item
}

// unit tests
// do not modify the below code
test.skip('linear search', function () {
  const lookingFor = { id: 5, name: 'Brian' }
  expect(
    linearSearch(5, [
      { id: 1, name: 'Sam' },
      { id: 11, name: 'Sarah' },
      { id: 21, name: 'John' },
      { id: 10, name: 'Burke' },
      { id: 13, name: 'Simona' },
      { id: 31, name: 'Asim' },
      { id: 6, name: 'Niki' },
      { id: 19, name: 'Aysegul' },
      { id: 25, name: 'Kyle' },
      { id: 18, name: 'Jem' },
      { id: 2, name: 'Marc' },
      { id: 51, name: 'Chris' },
      lookingFor,
      { id: 14, name: 'Ben' },
    ])
  ).toBe(lookingFor)
})

test('binary search', function () {
  const lookingFor = { id: 23, name: 'Brian' }
  expect(
    binarySearch(23, [
      { id: 1, name: 'Sam' },
      { id: 3, name: 'Sarah' },
      { id: 5, name: 'John' },
      { id: 6, name: 'Burke' },
      { id: 10, name: 'Simona' },
      { id: 12, name: 'Asim' },
      { id: 13, name: 'Niki' },
      { id: 15, name: 'Aysegul' },
      { id: 17, name: 'Kyle' },
      { id: 18, name: 'Jem' },
      { id: 19, name: 'Marc' },
      { id: 21, name: 'Chris' },
      lookingFor,
      { id: 24, name: 'Ben' },
    ])
  ).toBe(lookingFor)
})
