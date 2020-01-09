// let str = '가나다';
// let iterator = str[Symbol.iterator]();

// for (let value of str) {
//     console.log(value);
// }

// let arr = [10, 20, 30];
// for (let value of arr) {
//     console.log(value);
// }


// let iterable = {
//     [Symbol.iterator]: function () {
//         return {
//             next: function () {
//                 if (this.value == 10)
//                     return { value: undefined, done: true };
//                 else
//                     return { value: "value: " + this.value++, done: false };
//             },
//             value: 0
//         };

//         // return (function () {
//         //     this.next = function () {
//         //         if (this.value == 10)
//         //             return { value: undefined, done: true };
//         //         else
//         //             return { value: this.value++, done: false };

//         //     };
//         //     this.value = 0;
//         // })();
//     }
// };

// for (let i of iterable) {
//     console.log(i);
// }

// let str = "iterator";
// let iterator = str[Symbol.iterator]();
// let result;
// do {
//     result = iterator.next();
//     console.log(result);
// } while (!result.done);

let iterator = {
    i: 1,
    [Symbol.iterator]: function () {
        return this;
    },
    next: function () {
        return (this.i <= 5) ? { value: "i: " + this.i++, done: false } : { value: undefined, done: true };
    }
}

for (let i of iterator) {
    console.log(i);
}