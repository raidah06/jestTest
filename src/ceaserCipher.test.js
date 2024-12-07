import Caesar from './ceaserCipher.js'

test('returns cipher of single letter', () => {
  expect(Caesar.cipher('a', 2)).toBe('c')
})

test('returns cipher of several letters (no wrapping)', () => {
  expect(Caesar.cipher('abc', 3)).toBe('def')
})

test('returns cipher of several letters (wrapping lower case)', () => {
  expect(Caesar.cipher('xyz', 3)).toBe('abc')
})

test('returns cipher of several letters (wrapping upper case)', () => {
  expect(Caesar.cipher('XYZ', 3)).toBe('ABC')
})

test('cipher punctuation is unaffected', () => {
  expect(Caesar.cipher('aBc!?";|/@£$%^&*(){}[]~ .,"', 3)).toBe(
    'dEf!?";|/@£$%^&*(){}[]~ .,"'
  )
})

test('cipher works on modulus 26', () => {
  expect(Caesar.cipher('aBc!?";|/@£$%^&*(){}[]~ .,"', 55)).toBe(
    'dEf!?";|/@£$%^&*(){}[]~ .,"'
  )
})

test('returns decipher of several letters (wrapping lower & upper case)', () => {
  expect(Caesar.decipher('cD', 2)).toBe('aB')
})

test('decipher punctuation is unaffected, high offset', () => {
  expect(Caesar.decipher('cD!?";|/@£$%^&*(){}[]~ .,"', 54)).toBe(
    'aB!?";|/@£$%^&*(){}[]~ .,"'
  )
})

test('deciphering a cipher returns the original result (long cipher)', () => {
  expect(
    Caesar.decipher(
      Caesar.cipher('The quick brown fox jumped over the lazy dogs.', 2),
      2
    )
  ).toBe('The quick brown fox jumped over the lazy dogs.')
})

test('deciphering a cipher returns the original result (long cipher high offset)', () => {
  expect(
    Caesar.decipher(
      Caesar.cipher('The quick brown fox jumped over the lazy dogs.', 1000),
      1000
    )
  ).toBe('The quick brown fox jumped over the lazy dogs.')
})