// create a function that determines whether all characters in a String are unique or
//  not Make it case-senstitive meaning a string with both "a" and "A" could pass the test

input: String;
output : Boolean;

console.log(isUnique('abcda'))

function isUnique (str){  
    for(let i = 0; i < str.length; i++){ //O(n)
        console.log(str.lastIndexOf(str[i])); //O(n)
        if(str.lastIndexOf(str[i]) !== i){
            return false;
        }        
    }
    return true;
    // Time: O(n*n) => O(n^2)
    // Space: O(1)
}

