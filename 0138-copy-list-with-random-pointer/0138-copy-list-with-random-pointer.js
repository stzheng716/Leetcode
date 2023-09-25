/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const hash = new Map();
    let dummyNode = new Node(0);

    let oldList = head;
    let newList = dummyNode;

    while(oldList) {
        let newNode = new Node(oldList.val);
        newList.next = newNode;
        newList = newNode;
        hash.set(oldList, newNode)

        oldList = oldList.next
    }

    oldList = head;

    while(oldList) {
        let newNode = hash.get(oldList)
        let newRandomNode = hash.get(oldList.random)
        if(oldList.random !== null) {
            newNode.random = newRandomNode
        }

        oldList = oldList.next
    }

    return dummyNode.next
};


//make new map

//make dummyNode

//curr = head

//newList = dummyNode

//while loop
    //make copy of existing list with next pointers
    
    //create new Node
    //newList.next = new Node
    //newList = newNode
    //set hash map with curr and newNode
    
    //iterate the current list

//set curr to head again

//while loop
    //get newNode
    //make sure newNode.random is not null
        //set random
    //iterate the current list

//return dummyNode.next
