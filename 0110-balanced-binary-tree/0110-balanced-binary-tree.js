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

    function DFS(root) {
        if(!root) return [true, 0];
        
        let leftHeight = DFS(root.left);
        let rightHeight = DFS(root.right)

        const balanced = Math.abs(leftHeight[1] - rightHeight[1]) <= 1 && leftHeight[0] && rightHeight[0]

        return [balanced, 1 + Math.max(leftHeight[1], rightHeight[1])]

    }

    return DFS(root)[0]
};