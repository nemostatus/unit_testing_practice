function reduceArray(array){
let reducer = (currentValue,accumulator) => currentValue + accumulator

return array.reduce(reducer)
}

module.exports = reduceArray