// refs: https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript
const numbers = [2, 6, 1, 7, 10,-2, 9, 3, 8, 5, 4, 15, -1];

//ฟังก์ชันแสดงเลขจากน้อยไปมาก
function asc(){
    //กำหนดให้ currentNum และ newNumbers = ว่างเปล่า
    let currentNum = null; //'6'
    let newNumbers = []; // []

    for(let i=0; i < numbers.length; i++)
    {
        //ถ้า currentNum === null ให้เข้าเงื่อนไขนี้
        if(currentNum === null)
        {
            //อาเรย์ตัวแรก [2] เก็บใน currentNum
            currentNum=numbers[i];

        //ถ้า currentNum มากกว่า [''] (ปัจจุบัน) ให้เข้าเงื่อนไขนี้
        }else if(currentNum > numbers[i]) // 6 > 1
        {

            newNumbers=findGreaterVal(newNumbers, numbers[i]);

        //ถ้า currentNum น้อยกว่า [''] (ปัจจุบัน) ให้เข้าเงื่อนไขนี้
        }else if(currentNum < numbers[i])// 2 < 6
        {
            // currntNum = 2 = value , newNumbers = arr
            newNumbers=findGreaterVal(newNumbers, currentNum); 
            // ตัวเลขที่ทำการลูป ไปเก็บใน currentNum
            currentNum=numbers[i];
        }
    }
    newNumbers.push(currentNum); //[2]
    return newNumbers;
}

// value ตัวเลขในอาเรย์ที่ทำการลูป [2,3,4...]
// arr = newNumber ที่เก็บข้อมูลแล้ว
function findGreaterVal(arr=[], value){ //[2]
    //arr=[2], value=1
    // เช็คว่ามี arr ที่มากกว่า value เท่าไหร่ 
    const vals = arr.filter(item => item > value); // [2] > 1 = [2] 
    if(vals.length > 0)
    {
        // value
        const firstVal = vals[0]; //2 
        const firstValInd = arr.indexOf(firstVal);
        // splice จะเป็นการเปลี่ยนแปลงค่าใน array เดิม 
        arr.splice(firstValInd, 0, value);
        return arr;
    }else
    {
        // value ไปเก็บใน arr
        arr.push(value); //2 , [2]
        return arr;
    }
}

const result = asc();
console.log(result)