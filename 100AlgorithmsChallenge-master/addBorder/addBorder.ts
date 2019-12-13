

function addBorder(picture) {
// `````````````````````````Using forloop```````````````````````````
let holder;
let mover;
let star = '*'

let picContentCount = picture.length - 1
let addedpicturelength = picture.length + 2

for(let i = 0; i<addedpicturelength; i++){
   
    if(picture[i] && !picture[i+1]){
    
       holder = picture[i]
       mover = picture[i - 1]
       picture[i] = `*${mover}*`
       picture[i+1]=`*${holder}*`
       i++
       picture[0] = star.repeat(picture[1].length +2)  
       picture[addedpicturelength] = star.repeat(picture[1].length +2) 

}


}
// `````````````````````````````Using Built ins ```````````````````````````
// let star = '*'
// for(let i = 0;i < picture.length;i++){
//     picture[i] = `*${picture[i]}*`
// }
// picture.unshift(star.repeat(picture[1].length + 2))
// picture.push(star.repeat(picture[1].length + 2))

return(picture)
  }
        
    
// using built ins


console.log(addBorder(["abc", "ded"]));