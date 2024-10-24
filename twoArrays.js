// You are given an array of objects, where each object represents a person with two properties: name (a string) and age (a number). Write a JavaScript function that:

// 1. Sorts the array by the person's age in ascending order. 
// 2. Removes any object where the age is less than 18.
// 3. Returns a new array with only the names of the remaining people (sorted by age).
// expected output:   ["Emma", "Alex", "Alice"] 


const people = [
    { name: "Alex", age: 25 },
    { name: "John", age: 17 },
    { name: "Alice", age: 30 },
    { name: "Emma", age: 20 },
    { name: "Mike", age: 16 }
  ];



// -------------------------------------------------
// 1. Sorting 

function part(arr, low, high){
    let pivot = arr[high]
    let i = low - 1

    for (let j = low; j <= high; j++) {
        
        if (arr[j].age < pivot.age) {
            i++;
            swap(arr, i , j);
        }
    }

    swap(arr, i + 1, high);
    return i + 1;
}


function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// The QuickSort function implementation
function quickSort(arr, low, high)
{
    if (low < high) {
        // pi is the partition return index of pivot
        let pi = part(arr, low, high);
        // Recursion calls for smaller elements
        // and greater or equals elements
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }

}


// -------------------------------------------------
// 2. Removes object where age < 18.
function removeUnder18(){
    const temp = []
    for (i = 0; i < people.length; i++){
        if (people[i].age > 18) {
            temp.push(people[i])
        }
    }

   return temp
}



// -------------------------------------------------
// 3. Returns a new array with only the names of the remaining people (sorted by age).

function main(){
    // Call QuickSort on the entire array
    const names = []
    quickSort(people, 0, people.length - 1);
    const newArray = removeUnder18()
    for (i = 0; i < newArray.length; i++){
        names.push(newArray[i].name)
    }
    
    return names
}


console.log(main())

