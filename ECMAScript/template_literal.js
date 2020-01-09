str = `hello my friend
my name is kim junho`;

console.log(str);

name = 'kim junho';
fstr = `hello my frined
my name is ${name}`;

console.log(fstr);

let tagged = function (arr, a, b) {
    console.log("arr:", arr);
    return `${arr[0]}${a > b ? 'A' : 'B'}가 더 큽니다.`;
};

let A = 30;
let B = 50;
let tstr = tagged`A와 B 둘 중 ${A} ㅋㅋㅋㅋㅋㅋ ${B} ㅎㅎㅎㅎ`;
console.log(tstr);