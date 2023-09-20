const lengthOfLongestSubstring = function (str) {

    const numSet = new Set();
    let l = 0;
    let maxLen = 0;

    for(r = 0; r < str.length; r++){
        while(numSet.has(str[r])){
            numSet.delete(str[l])
            l++;
        }
        numSet.add(str[r])
        maxLen = Math.max(maxLen, numSet.size)
    }

    return maxLen;
}
//init a new set
//left point to 0
// maxLen = 0;

//for loop r pointer
    //while loop set has r
        //set.delete(s[l])
        //l++
    //set.add(s[r])
    //maxLen = maxLen, set.size

//return maxLen