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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];

    const res = [];

    function BFS(root) {
        const que = [];
        que.push(root);
        
        while(que.length) {
            const levelArr = [];
            const levels = que.length;

            for(let i = 0; i < levels; i++) {
                const curr = que.shift()

                if(curr.left) {
                    que.push(curr.left)
                }
                if(curr.right) {
                    que.push(curr.right)
                }

                levelArr.push(curr.val) 
            }

            res.push(levelArr[levels - 1])
        }
    }

    BFS(root);
    return res;
};

//use bfs