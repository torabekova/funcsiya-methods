
const numbers = [1,2,3,4,5,6];

const result = numbers.every(isPositiv);
const results = numbers.every(isNegativ)

function isPositiv(element) {
    return element >0
    
}

console.log(result)


function isNegativ(element) {
    return element >1
    
}

console.log(results)


