/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0;
    let count = new Map();
    let maxLen = 0;

    for(let r = 0; r < s.length; r++){
        count.set(s[r], 1 + (count.get(s[r]) || 0))
        while((r - l + 1) - Math.max(...count.values()) > k) {
            count.set(s[l], count.get(s[l]) - 1)
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
};

//sliding window 
//the condition to meet to increase window size
    // r - l + 1 - most freq Char > k

//init l
//init count = {};
//maxLen = 0

//for loop with r
    //while loop to meet condition
        //maxLen = Math.max(maxLen, r - l + 1)
        //count[s[l]]--;
        //left ++;
    //count[s[r]] = (count[s[r]] || 0) + 1

//return maxLen