// write a function that takes in a string and returns a nes string.
//  the new string should be the same as the original with every duplicate removed

// input String
// output String

console.log(
    removeDupes('abcd'), // => abcd,
    removeDupes('aabbccdd') // => abcd
);

// function removeDupes(str){
//     let cleaned = [];
//     for(let i=0;i < str.length; i++){  // O(n)
//         let currentChar = str[i];
//         if(cleaned.includes(currentChar)){ // O(n)
//            continue;
//         }else{
//             cleaned.push(currentChar);
//         }
//     }
//     return cleaned.join('');
//     // Time: O(n^2)
//     // space O(n)

// }

// function removeDupes(str){
//     let cleaned = [];
//     for(let i=0;i < str.length; i++){
//         let currentChar = str[i];
//         if(str.lastIndexOf(currentChar) !== i){
//            continue;
//         }else{
//             cleaned.push(currentChar);
//         }
//     }
//     return cleaned.join('');

// }

function removeDupes(str){
    let chars = new Set(str);
    return Array.from(chars).join();
}