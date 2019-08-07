// Given an integer, convert it to a roman numeral.Input is guaranteed to be within the range from 1 to 3999.

var intToRoman = function (num) {
    let str = "";
    let count = num;
    while (count > 0) {
        if (count - 1000 >= 0) {
            str += "M";
            count -= 1000;
        } else if (count - 900 >= 0) {
            str += "CM";
            count -= 900;
        } else if (count - 500 >= 0) {
            str += 'D';
            count -= 500;
        } else if (count - 400 >= 0) {
            str += 'CD';
            count -= 400;
        } else if (count - 100 >= 0) {
            str += 'C';
            count -= 100;
        } else if (count - 90 >= 0) {
            str += 'XC';
            count -= 90;
        } else if (count - 50 >= 0) {
            str += "L";
            count -= 50;
        } else if (count - 40 >= 0) {
            str += "XL";
            count -= 40;
        } else if (count - 10 >= 0) {
            str += "X";
            count -= 10;
        } else if (count - 9 >= 0) {
            str += "IX";
            count -= 9;
        } else if (count - 5 >= 0) {
            str += "V";
            count -= 5;
        } else if (count - 4 >= 0) {
            str += "IV";
            count -= 4;
        } else if (count - 1 >= 0) {
            str += "I";
            count -= 1;
        }
    }
    return str;
};