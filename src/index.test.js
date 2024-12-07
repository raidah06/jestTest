const cap=require('./index');

test('capitalize the first letter of the string',()=>{
    expect(cap('string')).toBe('String')
    expect(cap('String')).toBe('String')
})