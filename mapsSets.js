/*
1,2,3,4

ref

{[[1,2,3],true],[[1,2,3],false]}

*/
const hasDuplicate = (arr) => new Set(arr).size==arr.length?false:true;

const vowelCount = str => {
    const myMap = new Map();
    for(let char of str){
        if ('aeiouAEIOU'.includes(char)){
            if(myMap.has(char.toLowerCase())){
                myMap.set(char.toLowerCase(),myMap.get(char)+1)
            }else{
                myMap.set(char.toLowerCase(),1);
            }
        }
    }
    return myMap;
}