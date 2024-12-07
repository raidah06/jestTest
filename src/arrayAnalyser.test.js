import { arrayAnalyser } from './arrayAnalyser'

const testArray1 = [4, 6, 8, 10, 2] // mean 6
const testArray2 = [2.5, -1, 2.5, 1] // mean 1.25
console.log(arrayAnalyser(testArray1))

test('returns object with mean (1)', () => {
  expect(arrayAnalyser(testArray1).mean).toBe(6)
})
test('returns object with mean (2)', () => {
  expect(arrayAnalyser(testArray2).mean).toBe(1.25)
})

test('returns object with min (1)', () => {
  expect(arrayAnalyser(testArray1).min).toBe(2)
})
test('returns object with min (2)', () => {
  expect(arrayAnalyser(testArray2).min).toBe(-1)
})

test('returns object with max (1)', () => {
  expect(arrayAnalyser(testArray1).max).toBe(10)
})
test('returns object with max (2)', () => {
  expect(arrayAnalyser(testArray2).max).toBe(2.5)
})

test('returns object with length (1)', () => {
  expect(arrayAnalyser(testArray1).length).toBe(5)
})
test('returns object with length (2)', () => {
  expect(arrayAnalyser(testArray2).length).toBe(4)
})