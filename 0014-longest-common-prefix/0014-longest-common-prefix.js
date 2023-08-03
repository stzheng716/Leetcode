/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        for(let word of strs) {
            if(strs[0][i] !== word[i] || i > word.length) {
                return prefix
            }
        }
        prefix += strs[0][i];
    }
    
    return prefix;
};

//input a string[]
//output string
//init a prefix var
//for loop through the first word of strs
    //for loop through strs
        //if firstWordChar !== strs[i] || i > firstWord.length
            //return prefix
        //prefix add char
//return prefix
