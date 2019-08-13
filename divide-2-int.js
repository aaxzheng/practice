// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.
// Return the quotient after dividing dividend by divisor.
// The integer division should truncate toward zero.
// Both dividend and divisor will be 32 - bit signed integers.
// The divisor will never be 0.
// Assume we are dealing with an environment which could only store integers within the 32 - bit signed integer range: [−231, 231 − 1].For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

//first solution (bad time complexity)
var divide = function(dividend, divisor) {
   let count = dividend;
   let result = 0;
    if (divisor > 0 && dividend > 0) {
        while (count > 0) {
            if (count - divisor < 0) {
                break;
            } else if (divisor > 0) {
                count -= divisor;
                result++;
             }
        }
    } else if (divisor < 0 && dividend > 0) {
        while (count > 0) {
            if (count + divisor < 0) {
                break;
            } else {
                count += divisor;
                result--;
            }
        }
    } else if (divisor > 0 && dividend < 0) {
       while (count < 0) {
            if (count + divisor > 0) {
                break;
            } else {
                count += divisor;
                result--;
            }
        }       
    } else {
       while (count < 0) {
            if (count - divisor > 0) {
                break;
            } else {
                count -= divisor;
                result++;
            }
        }        
    }
    if (result > 2**31 - 1) {
        return 2**31-1;
    }
    return result;
};

//better answer 
var divide = function (dividend, divisor) {
    let resultNegative = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0);
    let newDividend = Math.abs(dividend);
    let newDivisor = Math.abs(divisor);
    let result = 0;
    if (newDivisor === 1) {
        result = newDividend;
    } else {
        let modifier = 0;
        let answer = 0;
        while (modifier + newDivisor <= newDividend) {
            let addModifier = newDivisor;
            let added = 1;
            while (modifier + addModifier + addModifier < newDividend) {
                addModifier += addModifier;
                added += added;
            }
            modifier += addModifier;
            answer += added;
        }
        result = answer;
    }
    return resultNegative ? Math.max(0 - result,-2147483648) : Math.min(result,2**31 - 1);
};