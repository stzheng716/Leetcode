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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    
    function BFS(root, res = []){ 
        const que = []; //[9n, 20n]
        if(root) {
            que.push(root)
        }

        while(que.length) { //t
            let levelArr = []; //[3]
            for (let i = (que.length - 1); 0 <= i; i--)  { 
                const curr = que.shift(); //3n

                if(curr.left) {
                    que.push(curr.left)
                }

                if(curr.right) {
                    que.push(curr.right)
                }
                levelArr.push(curr.val);
            }
            res.push(levelArr)
        }
        return res;
    }
    return BFS(root)
};

//doing bfs
//left to right in order traversal

//init a res: array

//define the bfs function and pass in the root
    //const queue = [];
    //if root
        //queue.push(root)

    //while queue.length > 0
        //levelArr = [];
        //for loop on que
            //curr = queue.shift()

            //levelArr.push(curr.val)
            //if curr.left
                //que.push(curr.left)
            //if curr.right
                //que.push(curr.right)
        //res.push(levelArr)
        //levelArr = []

//return res