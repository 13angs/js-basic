// refs: https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript
const numbers = [2, 6, 1, 7, 10, 9, 3, 8, 5, 4];

function asc(){
    let currentNum = null;
    let newNumbers = [];
    for(let i=0; i < numbers.length; i++)
    {
        if(currentNum === null)
        {
            currentNum=numbers[i];
            // newNumbers.push(numbers[i]);

        }else if(currentNum > numbers[i])
        {
            // newNumbers.push(numbers[i]);
            newNumbers=findGreaterVal(newNumbers, numbers[i]);

        }else if(currentNum < numbers[i])
        {
            // newNumbers.push(currentNum);
            newNumbers=findGreaterVal(newNumbers, currentNum);
            currentNum=numbers[i];
        }
    }
    newNumbers.push(currentNum);
    return newNumbers;
}

function findGreaterVal(arr=[], value){
    const vals = arr.filter(item => item > value);

    if(vals.length > 0)
    {
        // vals
        // value
        const firstVal = vals[0];
        const firstValInd = arr.indexOf(firstVal);
        arr.splice(firstValInd, 0, value);
        return arr;
    }else
    {
        // vals;
        arr.push(value);
        return arr;
    }
}

const result = asc();
console.log(result)