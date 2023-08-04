/**
 * Take two string s and t and return true if all letter can be replaced with another while preserving the order of character.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {

    const sHash = {};
    const tHash = {};

    for(let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tChar = t[i];

        if(sChar in tHash && tHash[sChar] !== tChar || 
            tChar in sHash && sHash[tChar] !== sChar) {
            return false
        }

        tHash[sChar] = tChar;
        sHash[tChar] = sChar;
    }

    return true;

};


//input: s: string && t: string
//output: boolean

//examples: bob && pop => true
//examples: danny && penny => ture

//edge cases: will it always be lowercase letters?

//fail fast: if length of s !== t return false;

//init POJO for sHash and tHash

//for loop; s.length

    //init sChar = s[i] char
    //init tChar =  t[i] char

    //if sChar in tHash && tHash[s] !== sChar and vice versa
        //return false;

    //add s[i] = t[i] to s map
    //add t[i] = s[i] to t map

//return false;
