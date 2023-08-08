/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const newString = [];

    for(let char of s) {
        let lowerChar = char.toLowerCase();

        if(lowerChar.charCodeAt() >= 97 && lowerChar.charCodeAt() <= 122 ||
        lowerChar.charCodeAt() >= 48 && lowerChar.charCodeAt() <= 57) {
            newString.push(lowerChar);
        }
    }

    let stdString = newString.join("");
    let reverseString = newString.reverse().join("");

    return stdString === reverseString;
};

//init newString = []

//for loop through string
    //lower case string
    //if charcodeat >= 97 && charcodeat <= 122
        //add letter to array
    
//let stdString = newString.join("")
//let reverseString = newString.reverse().join("")

//return stdString === revsereString