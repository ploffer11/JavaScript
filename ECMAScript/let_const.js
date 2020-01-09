let f = function () {
    for (let i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1);
    }
}

f();

let g = function () {
    for (let i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1);
    }
}

g();

let lastName = "kim";
const LAST_NAME = "kim";

(function () {
    var a = 100;
    switch (a) {
        case 100:
            var a = 200;
            break;
    }
    console.log(a);
})();

(function () {
    let a = 100;
    switch (a) {
        case 100:
            let a = 200;
            break;
    }
    console.log(a);
})();

