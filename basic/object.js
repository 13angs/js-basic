const obj1 = {
    user: 'romdon',
    last: 'uma',
    age: 1
}

const obj2 = {
    ship: 'pattani',
}

// assign the object to the var
// and to the target
// const obj3 = Object.assign(obj1, obj2);

// console.log(obj1)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
console.log(obj3)