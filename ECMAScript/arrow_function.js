let add = (a, b) => a + b;
// add = (a, b) => { return a + b };

console.log(add(3, 5));

let print = message => document.write(message);

const calculation = {
    add: (a, b) => {
        return a + b;
    }
};

let obj = {
    foo: function () {
        console.log(this);
        console.log(arguments);
    },
    bar: () => {
        console.log(this);
        console.log(arguments);
    }
}

obj.foo();
obj.foo();

f = () => { };
// F = new f(); error
console.log(f.prototype);