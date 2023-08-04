/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    const addSet = new Set();

    for (let email of emails) {
        const [local, domain] = email.split("@")
        let realAddress;
        let newLocal = ""
        for (let char of local) {
            if (char === "+") {
                break
            }

            if (char !== ".") {
                newLocal += char
            }

            realAddress = newLocal + "@" + domain
        }
        addSet.add(realAddress)
        realAddress = ""

    }
    
    return addSet.size
};

//init a new set

//for loop through the emails array
    //[local, domain] = email.split("@")
    //init newLocal = ""
    //for loop through local
        //if "+"
            //break
        //if not .
            //add to newLocal
    //const realAddress = newLocal + "@" +domain
    //set.add()

//return set.size