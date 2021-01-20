function logArray(array){
let mapped = array.map(x=>{
    let string = toString(x)
    return string.concat(" ", "logged")
})
return mapped
}

module.exports = logArray