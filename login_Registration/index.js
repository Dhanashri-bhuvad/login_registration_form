
function countVowels(str){
    let count=0;
    const vowels="aeiouAEIOU";
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    } 
    return count;
}
let str="Hello World";
let numVowels=countVowels(str);
console.log(numVowels);
