function funnyFont(string){
const array = string.split('')
const newarray = []
 for(let i = 0; i<array.length; i++){
     if(i === 0 || i % 2 === 0 ){
    newarray.push(array[i].toUpperCase())}
     else {
        newarray.push(array[i])
     }
 }
//x % 2 === 0 
// const newarray = array.map(x => {
//     if(array.indexOf(x) === 0 || array.lastIndexOf(x) === (x%2 ==0)  ){
//       return  x.toUpperCase()
//     }
//     else{
//       return  x
//     }
// }
// )
// console.log(newarray)
 return newarray.join('')
    }
    //indexof returns first index of instance so i need to find a way to id all indexes of th element
module.exports = funnyFont


// const change = array.map(x => {
//     if(change.indexOf(x) === 0){

//     }

//how to select every other element 
//how to uppercase element -