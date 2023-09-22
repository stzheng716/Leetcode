/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    
    function DFS(pNode, qNode){ 
        if(pNode === null && qNode === null) {
            return true
        }

        if((pNode === null && qNode !== null) || (pNode !== null && qNode === null)) return false;
        const leftNode = DFS(pNode.left, qNode.left)
        const rightNode = DFS(pNode.right, qNode.right)

        if(pNode.val === qNode.val && leftNode && rightNode) {
            return true
        }

        return false
    }

    return DFS(p, q)
};

//use DFS 

//define the function
    //if statement to check if p and q are null
    //
