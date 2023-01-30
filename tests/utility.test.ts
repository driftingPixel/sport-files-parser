import {
  getAllOccurrenceIndexes,
  groupSequences,
} from '../src/utility/ArrayUtility'
import { expect } from 'chai'

const sequenceTestData = [
  {
    data: [1],
    result: [
      {
        repeats: 1,
        sequence: [1],
      },
    ],
  },
  {
    data: [1, 2],
    result: [
      {
        repeats: 1,
        sequence: [1],
      },
      {
        repeats: 1,
        sequence: [2],
      },
    ],
  },
  {
    data: [1, 1, 1, 1, 1, 1, 1],
    result: [
      {
        repeats: 7,
        sequence: [1],
      },
    ],
  },
  {
    data: [1, 1, 1, 1, 1, 1],
    result: [
      {
        repeats: 6,
        sequence: [1],
      },
    ],
  },
  {
    data: [1, 2, 1, 2, 1, 2],
    result: [
      {
        repeats: 3,
        sequence: [1, 2],
      },
    ],
  },
  {
    data: [0, 4, 1, 2, 1, 2, 1, 2],
    result: [
      {
        repeats: 1,
        sequence: [0],
      },
      {
        repeats: 1,
        sequence: [4],
      },
      {
        repeats: 3,
        sequence: [1, 2],
      },
    ],
  },
  {
    data: [0, 1, 2, 1, 2, 1, 2],
    result: [
      {
        repeats: 1,
        sequence: [0],
      },
      {
        repeats: 3,
        sequence: [1, 2],
      },
    ],
  },
  {
    data: [1, 2, 3, 4, 2, 3, 4, 2, 3, 5, 1],
    result: [
      {
        repeats: 1,
        sequence: [1],
      },
      {
        repeats: 2,
        sequence: [2, 3, 4],
      },
      {
        repeats: 1,
        sequence: [2],
      },
      {
        repeats: 1,
        sequence: [3],
      },
      {
        repeats: 1,
        sequence: [5],
      },
      {
        repeats: 1,
        sequence: [1],
      },
    ],
  },
  {
    data: [1, 2, 3, 2, 3, 1, 3, 1, 1, 1, 1, 2, 3, 4, 4, 5, 3, 2, 3, 2, 1],
    result: [
      {
        repeats: 1,
        sequence: [1],
      },
      {
        repeats: 2,
        sequence: [2, 3],
      },
      {
        repeats: 1,
        sequence: [1],
      },
      {
        repeats: 1,
        sequence: [3],
      },
      {
        repeats: 4,
        sequence: [1],
      },
      {
        repeats: 1,
        sequence: [2],
      },
      {
        repeats: 1,
        sequence: [3],
      },
      {
        repeats: 2,
        sequence: [4],
      },
      {
        repeats: 1,
        sequence: [5],
      },
      {
        repeats: 2,
        sequence: [3, 2],
      },
      {
        repeats: 1,
        sequence: [1],
      },
    ],
  },
  {
    data: [1, 2, 3, 4, 4, 5, 3, 2, 3, 2, 1],
    result: [
      {
        repeats: 1,
        sequence: [1],
      },
      {
        repeats: 1,
        sequence: [2],
      },
      {
        repeats: 1,
        sequence: [3],
      },
      {
        repeats: 2,
        sequence: [4],
      },
      {
        repeats: 1,
        sequence: [5],
      },
      {
        repeats: 2,
        sequence: [3, 2],
      },
      {
        repeats: 1,
        sequence: [1],
      },
    ],
  },
]

// describe('', () => {
//   it('Get all indexes of element', () => {
//     expect(
//       JSON.stringify(getAllOccurrenceIndexes(sequenceTestData[0].data, 1))
//     ).equal(JSON.stringify([0]))
//     expect(
//       JSON.stringify(getAllOccurrenceIndexes(sequenceTestData[1].data, 1))
//     ).equal(JSON.stringify([0]))
//     expect(
//       JSON.stringify(getAllOccurrenceIndexes(sequenceTestData[1].data, 2))
//     ).equal(JSON.stringify([1]))
//     expect(
//       JSON.stringify(getAllOccurrenceIndexes(sequenceTestData[1].data, 3))
//     ).equal(JSON.stringify([]))
//     expect(
//       JSON.stringify(getAllOccurrenceIndexes(sequenceTestData[2].data, 1))
//     ).equal(JSON.stringify([0, 1, 2, 3, 4, 5]))
//     expect(
//       JSON.stringify(getAllOccurrenceIndexes(sequenceTestData[2].data, 2))
//     ).equal(JSON.stringify([]))
//     expect(
//       JSON.stringify(getAllOccurrenceIndexes(sequenceTestData[3].data, 1))
//     ).equal(JSON.stringify([0, 7]))
//     expect(
//       JSON.stringify(getAllOccurrenceIndexes(sequenceTestData[3].data, 3))
//     ).equal(JSON.stringify([2, 5]))
//   })
// })

describe('', () => {
  it('Group the same sequences', () => {
    sequenceTestData.forEach((testData) =>
      expect(JSON.stringify(groupSequences(testData.data))).equal(
        JSON.stringify(testData.result)
      )
    )
  })
  // it('Group the same sequences', () => {
  //   sequenceTestData.forEach(testData =>
  //     expect(JSON.stringify(groupSequences(sequenceTestData[1].data))).equal(JSON.stringify(sequenceTestData[1].result)))
  // })
})
