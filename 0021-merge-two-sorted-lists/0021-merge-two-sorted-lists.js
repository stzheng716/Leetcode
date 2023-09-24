/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(ll1, ll2) {

    let list1 = ll1;
    let list2 = ll2;

    let newList = dummyNode = new ListNode();

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            newList.next = list1
            list1 = list1.next
        } else {
            newList.next = list2;
            list2 = list2.next
        }

        newList = newList.next
    }

    while(list1 !== null) {
        newList.next = list1
        list1 = list1.next
        newList = newList.next
    }

    while(list2 !== null) {
        newList.next = list2;
        list2 = list2.next
        newList = newList.next
    }

    return dummyNode.next

};

//start with head of both list

//list1 = ll1
//list2 = ll2

//newlist = dummyNode = new ListNode()

//while list1 and list2
    //if list1.val <= list2.val
        //newList.next = list1
        //list1 = list1.next
    //else
        //newList.next = list2
        //list2 = list2.next

//while list1 !== null
    //newList.next = list1
    //list1 = list1.next

//while list2 !== null
    //newList.next = list2
    //list2 = list2.next 

//return dummyNode.next
