const palindromes = function (string) {

    let cleanString = string.toLowerCase().replace(/[^a-z]/g, "");

    let reverse = cleanString.split('').reverse().join('');

    if (cleanString == reverse){
        return true;
    }

    else{

        return false;
    }

};



// Do not edit below this line
module.exports = palindromes;



