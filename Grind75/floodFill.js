// You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill:

// 1. Begin with the starting pixel and change its color to color.
// 2. Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel, either horizontally or vertically) and shares the same color as the starting pixel.
// 3. Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches the original color of the starting pixel.
// 4. The process stops when there are no more adjacent pixels of the original color to update.
// Return the modified image after performing the flood fill.


const floodFill = function(image, sr, sc, color) {
    // find the original starting point
    const original = image[sr][sc]

    // create a recursive function
    function recurse(image, sr, sc){
        // check boundaries
        if(sr < 0 || sr > image.length-1 || sc < 0 || sc > image[0].length-1 || image[sr][sc] !== original || image[sr][sc] === color){
            return image
        }
        // update the pixel
        image[sr][sc] = color

        // update in four directions
        recurse(image, sr+1, sc) //row goes up
        recurse(image, sr-1, sc) // row goes down
        recurse(image, sr, sc+1) // column goes right 
        recurse(image, sr, sc-1) // column goes left

        return image
    }

    return recurse(image, sr, sc)
}

