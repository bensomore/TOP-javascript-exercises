const convertToCelsius = function(far) {

let ctoc = (far - 32) * (5/9);

return Math.round(ctoc * 10)/10;

};

const convertToFahrenheit = function(cel) {

  let ctof = (cel * (9/5)) + 32;

  return Math.round(ctof * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
