// Write a function that accepts two parameters both array 
// the array can have both strings and numbers
// return true if the second array is a subset of the first 

// in other words, determine if every item in the second array is also in the first array


// Hints:
// This problem has multiple solution with different time complexities

// we'll need to consider how to deal with repeats such as when an item is present twice

console.log(
    arraySubset([2,1,3],[1,2,3]), // true
    arraySubset([2,1,1,3],[1,2,3]), // true
    arraySubset([1,2],[1,2,3]), // false
    arraySubset([1,2,3],[1,2,2,3]), // false
    arraySubset([1,2,3],[1,1,1]) // false
);

function arraySubset(supperSet, subset){ //m,n
    if(subset.length > supperSet.length ){
        return false;
    }
    // make a copy of the superset and delete current index if found
    const superCopy = [...supperSet]; // O(m)
    for(let i = 0; i < subset.length; i++){ //O(n)
        let currentSuperset = superCopy.indexOf(subset[i]); //O(m)       
        if(currentSuperset === -1){
            return false;
        }
        delete superCopy[currentSuperset];
    }
    return true;

    // Time: O(m*n)
    // spaces: O(m)

}