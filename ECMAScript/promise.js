// var cnt = 0;

// setTimeout(function () {
//     cnt++;
// }, 1000);

// console.log(cnt);


// ---------------------

// var cnt = 0;

// setTimeout(function () {
//     receiveCount(++cnt);
// }, 1000);

// function receiveCount($cnt) {
//     cnt = $cnt;
//     console.log(cnt);
// };

// let cnt = 0;

// let promise = new Promise(function (resolve, object) {
//     setTimeout(function () {
//         cnt++;
//         resolve(cnt);
//     });
// });

// promise.then(function ($cnt) {
//     cnt = $cnt;
//     console.log(cnt);
// });

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let flag = parseInt(Math.random() * 100);
        if (flag % 2 == 0)
            resolve('짝수라서 성공!!!');
        else
            reject('홀수라서 실패...');
    }, 1000);
});

promise.then(function (value) {
    console.log(value);
})

promise.catch(function (reason) {
    console.log(reason);
})
