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
 * @return {boolean}
 */
var isBalanced = function(root) {

    function getHeightOfTree(root){
        if (!root) return [true,0]

        const leftTree = getHeightOfTree(root.left);
        const rightTree = getHeightOfTree(root.right);

        const heightDiff = Math.abs(leftTree[1] - rightTree[1])

        const isBalanced = heightDiff <= 1 && leftTree[0] && rightTree[0];

        return [isBalanced, 1 + Math.max(rightTree[1], leftTree[1])]
    }

    return getHeightOfTree(root)[0]
};

//use dfs to get the height of each tree from the bottom up

//use recursion

//define getHeightOfTree(root)
    //if !root return [true, 0]
    
    //leftTree = getHeightOfTree(root.left)
    //rightTree = getHeightOfTree(root.right)

    //heightDiff = Math.abs(leftTree[1] - rightTree[1])

    //isBalanced = heightDiff <= 1 && leftTree[0] && rightTree[0] 

    //return [isBalaanced, 1 + Math.max(rightTree[1], leftTree[1])]
//return getHeightOfTree(root)[0]
