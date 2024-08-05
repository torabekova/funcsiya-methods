const numbers =[12,34,54,33,44,87];
const result =numbers.some(bigNumber)

function bigNumber(item) {
    return item > 34;

}

console.log(result)