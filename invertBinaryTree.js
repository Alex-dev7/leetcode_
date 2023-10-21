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