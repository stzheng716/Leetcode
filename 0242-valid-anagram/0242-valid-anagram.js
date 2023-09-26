/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false;

    const sCount = {};
    const tCount = {};

    for(let letter of s) {
        sCount[letter] = (sCount[letter] || 0) + 1
    }

    for(let letter of t) {
        tCount[letter] = (tCount[letter] || 0) + 1
    }

    for(let char in sCount) {
        console.log("sCount", sCount[char], "tCount", tCount[char])
        if(sCount[char] !== tCount[char]){
            return false;
        }
    }

    return true;
};

//use a frequency counter

//init a counter with sPOJO

//init a counter with tPOJO

//for loop through s 
    //set the letter frequency in the POJO

//for loop through letter in t
    //set the letter frequency in the tPOJO

//for in loop through one sPOJO
    //if sPOJO !== jPOJO
        //return false
//return true