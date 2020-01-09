// function* gen() {

//     i = 0;
//     while (i < 10) {
//         yield i++;
//     }
// }

// for (let i of gen())
//     console.log(i);

function* f() {
    for (let i = 0; i < 10; i++)
        yield "f: " + i;
    yield* g();
}

function* g() {
    for (let i = 0; i < 10; i++)
        yield "g: " + i;
}

for (let i of f())
    console.log(i);