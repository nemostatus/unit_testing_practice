const concatenated = require('./concat')

test('This should add on the word chosen', ()=>{
    expect(concatenated("word","plus")).toEqual("word plus")
})