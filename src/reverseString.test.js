const reverse=require('./reverseString');

test('reverse the string',()=>{
    expect(reverse('string')).toBe('gnirts')
    expect(reverse('String')).toBe('gnirtS')
})