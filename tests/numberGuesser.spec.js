//check 2 numbers and return true of one of the numbers is 100 
// //or if the sum of the numbers is 100

function checkNumbers(num1, num2) {
    if (num1 === 100 || num2 === 100){
        return true;
    } else if ((num1 + num2) === 100){
        return true;
    } else {
        return false;
    }

}


console.log(checkNumbers(100, 200));