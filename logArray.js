function logArray(array){
let mapped = array.map(x=>{
    let string = x.toString()
    return string.concat(" ", "logged")
})
return mapped
}

module.exports = logArray