/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if(!isAlphaNum(s[left]) && left <= right) {
            left++;
            continue
        } 
        
        if(!isAlphaNum(s[right]) && left <= right) {
            right--;
            continue
        } 

        if(s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true
};

function isAlphaNum(char) {
    const lowerChar = char.toLowerCase();

    return (("a".charCodeAt(0) <= lowerChar.charCodeAt(0) && "z".charCodeAt(0) >= lowerChar.charCodeAt(0)) || 
    ("0".charCodeAt(0) <= lowerChar.charCodeAt(0) && "9".charCodeAt(0) >= lowerChar.charCodeAt(0))) 
}


//init a left pointer = 0;
//init a right pointer = s.length - 1

//while l <= r
    //check if left char is alphaNumeric
        //left++

    //check if right char is alphaNumeric
        //right--

    //if left !== right
        //return false;

//return true

    
//function isAlphNum(char)
    // lowerChar = char.toLowerCase
    // ("a".charCodeAt(0) <= lowerChar.charCodeAt(0) && "z".charCodeAt(0) >= lowerChar.toLowerCase) || ("0".charCodeAt(0) <= lowerChar.charCodeAt(0) && "9".charCodeAt(0) >= lowerChar.charCodeAt(0)) 