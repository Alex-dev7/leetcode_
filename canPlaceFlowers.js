var canPlaceFlowers = function(flowerbed, n) {
    let count = n

    const arr = [...flowerbed]

   for(let i= 0; i < arr.length ;i++ ){
       if(arr[i] == 0 ){
           if(arr[i + 1] === 0 ){
               if(arr[i + 2] === 0){
                console.log('2')
                    count -= 1
                     i+=1
               } 
               else {
                console.log('1')
                  count -= 1     
               }    

           }
       }
   }
    return count <= 0
   
};

console.log(canPlaceFlowers([1,0,0,0,0,0,0,0,1], 3))
//                             |


// let current = 0; const size = flowerbed.length;
// for(var i = 0; i <= size; i++) {
//     if (i < size && flowerbed[i] == 0) {
//         current++;
//         if (i == 0) current++;
//         if (i == size - 1) current++;
//     } else {
//         n -= Math.trunc((current - 1) / 2);
//         if (n <= 0) return true;
//         current = 0;
//     }
// }
// return false;