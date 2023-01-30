export const chunks = (arr: any[], size = 2) => {
  return arr
    .map((x, i) => i % size == 0 && arr.slice(i, i + size))
    .filter((x) => x)
}

export const getAllOccurrenceIndexes = (array: any[], element: any) => {
  return array.reduce((acc, e, index) => {
    if (e == element) acc.push(index)
    return acc
  }, [])
}

const removeIndexesSmallerThenCurrent = (
  index: number,
  indexArray: number[]
) => {
  return indexArray.slice(indexArray.indexOf(index), indexArray.length)
}

const getSequence = (
  elementsAndOccurrence: { el: any; indexes: number[] }[],
  result: any[],
  currentSequenceFromParent?: { repeats: number; sequence: any[] },
  currentIndex = 0
) => {
  const elWithIndexes = elementsAndOccurrence[currentIndex]

  let currentSequence = currentSequenceFromParent
    ? currentSequenceFromParent
    : {
        repeats: 0,
        sequence: [] as any[],
      }

  if (!elWithIndexes) {
    if (currentSequence.repeats > 0) {
      result.push(currentSequence)
    }
    return result
  } else {
    if (currentSequence.sequence.length === 0) {
      currentSequence.sequence.push(elWithIndexes.el)
    }
  }
  currentSequence.repeats++

  if (elWithIndexes.indexes.length == 1) {
    // Case when element exist only one time in full array
    result.push(currentSequence)
    getSequence(elementsAndOccurrence, result, undefined, ++currentIndex)
  } else {
    // When exist sequence of 1 element many times (possible refactoring to more general case)
    if (elWithIndexes.indexes[1] - elWithIndexes.indexes[0] == 1) {
      getSequence(
        elementsAndOccurrence,
        result,
        currentSequence,
        ++currentIndex
      )
    } else {
      const arraysOfSequenceMaybe = elWithIndexes.indexes.map(
        (index, indexOfIndex) => {
          const endIndex = !elWithIndexes.indexes[indexOfIndex + 1]
            ? elementsAndOccurrence.length
            : elWithIndexes.indexes[indexOfIndex + 1]
          return elementsAndOccurrence.slice(index, endIndex)
        }
      )

      const sequenceCanBeLength = arraysOfSequenceMaybe[0].length

      //Try to get sequence longer than 1 element
      for (
        let arrayEqualing = 0;
        arrayEqualing < arraysOfSequenceMaybe.length;
        arrayEqualing++
      ) {
        if (
          arrayEqualing !== arraysOfSequenceMaybe.length - 1 &&
          elWithIndexes.indexes[arrayEqualing + 1] -
            elWithIndexes.indexes[arrayEqualing] >
            elWithIndexes.indexes[1] - elWithIndexes.indexes[0]
        ) {
          // When symbol on second position(index 1) position is not the same between first and second possible sequence
          // and possible sequence is longer than 1.
          break
        }
        let counter = 0
        for (
          let symbolIndexInArray = 0;
          symbolIndexInArray < sequenceCanBeLength;
          symbolIndexInArray++
        ) {
          if (
            arraysOfSequenceMaybe[arrayEqualing][symbolIndexInArray] &&
            arraysOfSequenceMaybe[arrayEqualing + 1] &&
            arraysOfSequenceMaybe[arrayEqualing + 1][symbolIndexInArray] &&
            arraysOfSequenceMaybe[arrayEqualing + 1][symbolIndexInArray].el ==
              arraysOfSequenceMaybe[arrayEqualing][symbolIndexInArray].el
          ) {
            counter++
            if (arrayEqualing == 0 && symbolIndexInArray != 0) {
              currentSequence.sequence.push(
                arraysOfSequenceMaybe[0][symbolIndexInArray].el
              )
            }
          } else {
            // If exist sequence and last item has corresponding sequence in further array but between sequence exist others elements. ex: 1,1,1,2,3,4,1 (ones)
            if (
              arrayEqualing == 0 &&
              symbolIndexInArray > 0 &&
              symbolIndexInArray <
                elWithIndexes.indexes[arrayEqualing + 1] -
                  elWithIndexes.indexes[arrayEqualing]
            ) {
              result.push({
                repeats: currentSequence.repeats,
                sequence: [arraysOfSequenceMaybe[0][0].el],
              })
              getSequence(
                elementsAndOccurrence,
                result,
                undefined,
                ++currentIndex
              )
              return result
            }
          }
        }

        if (counter == sequenceCanBeLength) {
          currentSequence.repeats++
        }
      }

      result.push(currentSequence)
      getSequence(
        elementsAndOccurrence,
        result,
        undefined,
        currentIndex +
          (currentSequence.sequence.length == 1
            ? 1
            : currentSequence.repeats * currentSequence.sequence.length)
      )
    }
    return result
  }
}

export const groupSequences = (arr: any[]) => {
  const elementsAndConcurrences = arr.map((element, index) => {
    return {
      el: element,
      // slice result to have all indexes which exist after current element, but indexes are always referring to original array.
      indexes: removeIndexesSmallerThenCurrent(
        index,
        getAllOccurrenceIndexes(arr, element)
      ),
    }
  })
  const result = [] as any[]
  getSequence(elementsAndConcurrences, result)

  return result
}
