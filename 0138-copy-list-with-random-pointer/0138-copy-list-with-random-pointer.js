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

    let newHead = new Node(0);
    let newCurr = newHead;

    let curr = head;
    
    while(curr){
        let newNode = new Node(curr.val);
        newCurr.next = newNode;
        newCurr = newNode
        hash.set(curr, newNode)

        curr = curr.next
    }

    curr = head

    while(curr) {
        let copyNode = hash.get(curr)
        if(curr !== null) {
            copyNode.random = hash.get(curr.random)
        } 

        curr = curr.next;
    }

    return newHead.next;
};
