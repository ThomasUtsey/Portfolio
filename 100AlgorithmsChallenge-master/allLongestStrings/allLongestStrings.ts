function allLongestStrings(inputArray) {
 const sArr = inputArray.sort((a,b) => b.length > a.length)
 const nArr = []
 for(let i = 0; i<sArr.length; i++){
   if(sArr[0].length === sArr[i].length){
       nArr.push(sArr[i]) 
    }else{
        return nArr
    }
}
}
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));