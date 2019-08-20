const Romans = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
    }
var romanToInt = function(s) {
  let value = 0;
  let romans = s.split("");
  for (let i = 0; i < romans.length; i++) {
    let duo = romans[i] + romans[i+1];
      if (Romans[duo]) {
          value += Romans[duo];
          i++
      } else {
          value += Romans[romans[i]];
      }
  }  
    return value
};