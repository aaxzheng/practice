var isPalindrome = function(x) {
    let original = x;
    if (x < 0) {
        return false;
    } else {
        let reverse = 0;
        while (x > 0) {
            reverse = (reverse * 10) + (x % 10);
            x = Math.floor(x/10);
            
        }

        if (reverse === original) {
            return true;
        }
    }
  return false;
};


console.log(isPalindrome(121));