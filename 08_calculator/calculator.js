const add = function(a,b) {

  return a+b;
	
};

const subtract = function(a,b) {

  return a-b;
	
};

const sum = function(arr) {

  if (arr.length == 0){
    return 0;
  }

  else{

  let fin = arr.reduce((a,b) => a + b);
  return fin;}
	
};

const multiply = function(arr) {

  let prod = arr.reduce((a,b) => a*b);

  return prod;

};

const power = function(a,b) {

  return Math.pow(a,b);
	
};

const factorial = function(num) {

  if (num === 1 || num === 0){
    return 1;
  }

  for (let i = num - 1; i >= 1; i--){
    num *= i;
  }

  return num;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
