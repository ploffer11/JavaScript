function f(x, ...args) {
    if (typeof x === "undefined")
        return 0;
    else
        return x + f(...args);
}

console.log(f(1, 2, 3, 4, 5));

console.log([] == []);
console.log([] === []);