// create a function that determines whether all characters in a String are unique or
//  not Make it case-senstitive meaning a string with both "a" and "A" could pass the test

input: String;
output : Boolean;

console.log(isUnique('abcda'));


console.log(isUnique('abcdef'));

console.log(isUnique('abcAdef'));

// function isUnique (str){  
//     for(let i = 0; i < str.length; i++){ //O(n)
//         console.log(str.lastIndexOf(str[i])); //O(n)
//         if(str.lastIndexOf(str[i]) !== i){
//             return false;
//         }        
//     }
//     return true;
//     // Time: O(n*n) => O(n^2)
//     // Space: O(1)
// }

// // improved solution
// function isUnique (str){  
//     let char = str.split('').sort(); // O(n * log(n))
//     for(let i = 1; i <= char.length; i++){ //O(n)
//         if(char[i] !== char[i - 1]){
//             return true;
//         }
//         return false;
//     }
//      // Time: O(n * log(n)) + O(n) => O(n + n * log(n)) => O(n*log(n))
//     //  Space: O(n)
// }

function isUnique (str){  
    let chars = {};
    for(let i =0; i < str.length; i++){
        let currentChar = str[i];
        if(chars[currentChar] === true){
            return false;
        }
        chars[currentChar]=true;
    }
    return false;
     // Time: O(n * log(n)) + O(n) => O(n + n * log(n)) => O(n*log(n))
    //  Space: O(n)
}