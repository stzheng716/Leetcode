/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let availCount = 0;
    let zeroCount = 0;
    flowerbed.unshift(0)
    flowerbed.push(0)

    for(let i = 0; i <= flowerbed.length; i++){

        if(flowerbed[i] === 0) {
            zeroCount++;
        }

        if(flowerbed[i] === 1 || flowerbed[i] === undefined) {
            if(zeroCount >= 3){
                availCount++;
                zeroCount = zeroCount - 3
                availCount += Math.floor(zeroCount / 2)
            }
            zeroCount = 0
        }
    }

    return availCount >= n
};

//input flowerbed: numbers[], n: number
//output boolean

//edge case: will i ever given a flowerbed that is violating the adjacent rule?

//init a count available flowers can be planeted

//for loop through the flowerbed.length - 2
    //init zeroCount
    //if 0 
        //zeroCount += 1
    //if 1  
        //if zeroCount >= 3
            //count++;
            //zeroCount - 3
            //count += ZeroCount % 2
        //zeroCount = 0
    
//return count >= n