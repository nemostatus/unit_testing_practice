const reverseArray = require("./reverseArray")

test('This should reverse an array.', () => {
    expect(reverseArray([1,2,3,4,5])).toEqual([5,4,3,2,1])
})