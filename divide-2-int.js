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