const logArray = require("./logArray")

test('ccreate new array with the word logged next to it', ()=> {
    const array = [1,2,3]
    expect(logArray(array)).toEqual(["1 logged", "2 logged", "3 logged"])
   
})
