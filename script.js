const number = [6,35,57,22,90];

const totol = number.reduce(score);



function score(accumulator, element) {
 return accumulator+element;   
}

console.log(`$${totol.toFixed(2)}`);