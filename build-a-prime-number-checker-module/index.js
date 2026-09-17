function isPrime(number){
    let count =0
    for(let i=number-1;i>1;i--){
        if(number%i ===0){
            count++
            break
        }
    }
    if(number<=1){
        return false
    }
    
    else if(count===0 ){
        return true
    }
    return false
}

module.exports={isPrime}