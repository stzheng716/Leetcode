/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs, map = new Map()) {
    if(!strs.length) return [];

    groupWords(strs, map)

    return [...map.values()]
}

function groupWords(strs, map) {
    for(let word of strs){
        const hash = getHash(word)
        const values = map.get(hash) || [];

        values.push(word);
        map.set(hash, values)
    }
}

function getHash(word){
    const freq = Array(26).fill(0);
    for(let char of word){
        charCode = getCharCode(char)

        freq[charCode]++;
    }

    return freq.toString()
}

const getCharCode = (char) => char.charCodeAt(0) - "a".charCodeAt(0)

//set new map
//if statement to gaurd an empty array pasted in
//call function groupWords

//function groupwords 
    //for loop on strs
        //function to get the hash of the word called get hash
        //values from the hash or it should be an empty array

        //push word to values
        //set value to the map

//function to hash word, input takes in word
    //create an array with 26s 0
    //for loop through str
        //get charcode pass in char

    //return array.toString()

//function getcharcode char.charCodeAt(0) - a.charCodeAt(0)