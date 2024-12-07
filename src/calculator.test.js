import Calculator from './calculator.js'

test('returns sum of two numbers', () => {
  expect(Calculator.sum(3, 4)).toBe(7)
})
test('returns sum of two numbers including negative & floating numbers', () => {
  expect(Calculator.sum(0.2, -4)).toBeCloseTo(-3.8)
})

test('returns the difference of two numbers', () => {
  expect(Calculator.difference(4, 3)).toBe(1)
})

test('returns the difference of two numbers including negative and floats', () => {
  expect(Calculator.difference(-4, 4.5)).toBeCloseTo(-8.5)
})

test('returns the product of two numbers', () => {
  expect(Calculator.product(5, 6)).toBe(30)
})

test('returns the product of two numbers including floats and negative numbers', () => {
  expect(Calculator.product(-0.5, 6)).toBeCloseTo(-3)
})

test('returns the quotient of two numbers', () => {
  expect(Calculator.quotient(10, 2)).toBe(5)
})

test('returns the quotient of two numbers including negative', () => {
  expect(Calculator.quotient(10, -2)).toBe(-5)
})

test('returns the quotient of two numbers result is a float', () => {
  expect(Calculator.quotient(9, 2)).toBe(4.5)
})