function almostIncreasingSequence(sequence){
let incor = 0

for(let i = 1; i < sequence.length; i++){
    if(sequence[i] <= sequence [i - 1]){
        incor++
        if(sequence[i] <= sequence[i - 2] && sequence[i+1] <= sequence[i - 1]) return false 
    }
}
return incor <= 1
}



console.log(almostIncreasingSequence([1, 3, 2, 2])) 
console.log(almostIncreasingSequence([1, 3, 2])) 