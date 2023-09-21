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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    maxDiam = [0];

    function DFS(root) {
       if(!root) return -1;

        const left = DFS(root.left);
        const right = DFS(root.right);

        maxDiam[0] = Math.max(maxDiam[0], 2 + left + right);
        return 1 + Math.max(left, right)
    }

    DFS(root)
    return maxDiam[0]
}

//needs to be recursive
//if !root return -1;

//return 1 + Math.max()