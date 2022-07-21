const arrs = [
    {name: 'don', last: 'um'},
    {name: 'don', last: 'uma'},
    {name: 'burhan', last: 'sa'},
    {name: 'burhan', last: 'saleh'},
    {name: 'kim', last: 'k'},
    {name: 'kim', last: 'ki'},
    {name: 'kim', last: 'kim'},
];

let names = {};
let prevItem = null;

arrs.map((item) => {
    if(!Boolean(prevItem))
    {
        if(!names[item.name])
        {
            names[item.name] = [];
        }
        names[item.name].push(item);
    }else if(prevItem.name !== item.name)
    {
        if(!names[item.name])
        {
            names[item.name] = [];
        }
        names[item.name].push(item);
    }
    
    else{
        if(prevItem.name === item.name)
        {
            names[item.name].push(item);
        }
    }
    prevItem=item;

    return item;
});

console.log(names)