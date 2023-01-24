const repeatString = function(string, num) {

    let final = [];

    if (num > 0){

        for(i = 0; i < num ; i++){

            final.push(string);
        }

        return final.join('');

    };

    if (num < 0){

        return "ERROR";
    }

    else {
        return final.join('');
    }

};

// Do not edit below this line
module.exports = repeatString;
