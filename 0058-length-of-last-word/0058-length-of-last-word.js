/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const sArr = s.trim().split(" ");
    const lastWord = sArr[sArr.length - 1];
    return lastWord.length
};

// init a sArr var = s.split(" ")
// init var lastWord = sArr[sArr.length - 1]
// return lastWord.length