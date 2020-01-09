// let arr = [1, 2, 3];
// console.log(arr.length);
// arr.length = 100;
// console.log(arr.length);

// let arr = [1, 2, 3];
// const length = Symbol('length');
// arr[length] = 100;
// console.log(arr[length]);
// console.log(arr.length);

// let arr = [1, 2, 3];
// arr.prop = 100;
// for (let i in arr)
//     console.log(i);

let arr = [1, 2, 3];
let prop = Symbol('prop');
arr[prop] = 100;
for (let i in arr)
    console.log(i);

