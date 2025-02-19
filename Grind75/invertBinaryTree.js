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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    //base case
    if(root === null) return root
    // Call the function recursively for the left and right subtrees
    invertTree(root.left)
    invertTree(root.right)

    //swapping nodes
    const currentValue = root.left
    root.left = root.right
    root.right = currentValue
    
    return root

};