const reduceArray = require("./reduceArray")

test('reduce given array', ()=> {
    const array = [1,2,3]
    expect(reduceArray(array)).toEqual(6)
   
})
