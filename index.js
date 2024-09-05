const fs = require('fs')

function soma(){
    const indice = 13
    let sum = 0
    let k = 1
    while(k < indice){
        k += 1
        sum += k
    }
    console.log(sum)
}

function fibonacci(x){
    
    let previous = 0
    let current = 1

    if(x == 0) return `O numero ${x} pertence a sequencia de fibonacci`

    while(x >= current){
        if(current == x) return `O numero ${x} pertence a sequencia de fibonacci`
        let temp = current
        current = current + previous
        previous = temp
    }

     return `O numero não ${x} pertence a sequencia de fibonacci`
}

console.log(fibonacci(100))

function questao3(){
    const jsonArr = fs.readFileSync('dados.json')
    const arr = JSON.parse(jsonArr)
    
    let least = Infinity
    let most = 0
    let sum = 0
    let validDays = 0

    for(let data of arr){
        if(data.valor == 0) continue
        if(data.valor < least) least = data.valor 
        if(data.valor > most) most = data.valor 
        sum += data.valor 
        validDays += 1
    }

    const average = sum/validDays
    let count = 0

    for(let data of arr){
        if(data.valor > average) count += 1
    }

    return {least,most,count}
}

console.log(questao3())

function questao4(){
    const data = { 
        'SP': 67836.43,
        'RJ': 36678.66,
        'MG': 29229.88,
        'ES': 27165.48,
        'OUTRO': 19849.53,
    }

    const sum = Object.values(data).reduce((acc,cur) => acc + cur,0)

    const res = {}

    for (const [key, value] of Object.entries(data)) {
        res[key] = (value/sum)*100
    }

    return res
}

console.log(questao4())


function question5(str){
    let newStr = ''
    
    for(let i = str.length-1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr
}

console.log(question5("Gabriel"))