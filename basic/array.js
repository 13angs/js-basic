
const arrStr = [
    {name: "don", job: 'devops'},
    {name: "kim", job: 'dev'},
    {name: 'suha', job: 'dev'}
]

// exclude the object with the name don
function excludeSomeELement(){
    return arrStr.filter(item => item.name !== 'don');
}

// query the elements
function queryElements(){
    return arrStr.filter(ele => ele.job === 'dev');
}

// append element to array
function appendElement(){
    arrStr.push({
        name: 'naya'
    })

    return arrStr;
}

// find a single element
function findElement(){
    return arrStr.find(ele => ele.name === 'don')
}

// pass array of arguments
// pass each element
function passEachArrArgs(arg1, arg2, arg3){
    return [arg1, arg2, arg3]
}

// get one of array arguments
function getOneArrArgs(args){
    return args;
}

console.log(getOneArrArgs(...arrStr));