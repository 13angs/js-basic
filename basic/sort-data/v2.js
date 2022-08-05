// const arr = [2, 6, 1, 7, 10, 9, 3, 8, 5, 4];

// function calculate () {
//     let = i, resulf
//     for(i=0; i < arr.length - 1 ; i++){ //i=0; i<size; ++i
//         if(arr[i] > arr[i+1]){
//             resulf = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = resulf
//         }
//     }
//     return arr;
// }

// refs: https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript

const numbers =   [2, 6, 1, 7, 10, 9, 3, 8, 5, 4];
//const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function asc(){
    let currentNum = null; //'6'
    let newNumbers = []; //[2]
    for(let i=0; i < numbers.length; i++)
    {
        if(currentNum === null)
        {
            currentNum=numbers[i];
            // newNumbers.push(numbers[i]);

        }else if(currentNum > numbers[i])
        {
            // newNumbers.push(numbers[i]);
            newNumbers=findGreaterVal(newNumbers, numbers[i]); //[1,2,3,5,6,7,8,9], '4'

        }else if(currentNum < numbers[i]) 
        // 7 < 10
        {
            // newNumbers.push(currentNum);
            newNumbers=findGreaterVal(newNumbers, currentNum); //[1,2, 6], '7'
            currentNum=numbers[i];
        }
    }
    newNumbers.push(currentNum); 
    return newNumbers;
}

function findGreaterVal(arr=[], value){
    //arr=[], value=2
    const vals = arr.filter(item => item > value); // [] > '2' = [], 

    if(vals.length > 0)
    {
        // vals
        // value
        const firstVal = vals[0]; //'5'
        const firstValInd = arr.indexOf(firstVal); //'3'
        arr.splice(firstValInd, 0, value);
        return arr; //[1,2,3,4,5,6,7,8,9]
    }else
    {
        // vals;
        arr.push(value); //[2]
        return arr;
    }
}

const result = asc();
console.log(result)