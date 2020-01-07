function alphabeticShift(inputString) {
let newStr = ''
    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] === 'z'){
        newStr+='a'

        }else{
        let code = inputString.charCodeAt(i)
        newStr += String.fromCharCode(code+1)
        }
    }
return newStr
}

console.log(alphabeticShift('crazy'));