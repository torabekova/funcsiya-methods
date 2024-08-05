const numbers = [10, 20, 30, 12, 40, 23];
const bigNumbers = numbers.filter(isBigNumbers);




function isBigNumbers(element){
    return element >=12;
}


console.log(bigNumbers)