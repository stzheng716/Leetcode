/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(root && !subRoot) return true
    if(!root && subRoot) return false
    
    if(sameTree(root, subRoot)) {
       return true
    }

    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
}


function sameTree(root, subRoot) {
    if(!root && !subRoot) {
        return true
    }

    if(root === null && subRoot !== null || root !== null && subRoot === null) {
        return false;
    }

    const lSubtree = sameTree(root.left, subRoot.left)
    const rSubtree = sameTree(root.right, subRoot.right) 

    if(lSubtree && rSubtree && root.val === subRoot.val) {
        return true
    }

    return false;
}


//write a function to check if it is the same tree
//base case
    //if !root and !subRoot 
        //return true;

    //if root node === null and subRoot !== null or root node !== null and subRoot === null
        //return false;
    
    //const leftNode = sameTree(root.left, subRoot.left)
    //const rightNode = sameTree(root.right, subRoot.right)

    //if(leftNode && rightNode && root.val === subRoot.val) {
        //return true;
    //}

    //return false;

