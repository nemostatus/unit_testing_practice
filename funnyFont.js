function funnyFont(string){
const array = string.split('')
const newarray = []
 for(let i = 0; i<array.length; i++){
     if(array.indexOf(array[i]) === 0 || (i% 2 == 0) ){
     newarray.push(array[i].toUpperCase())}
     else {
         newarray.push(array[i])
     }
 }
 return newarray.join('')
}
module.exports = funnyFont


// const change = array.map(x => {
//     if(change.indexOf(x) === 0){

//     }

//how to select every other element -
//how to uppercase element -