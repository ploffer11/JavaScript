function Person() { };

Person.prototype.age = 20;
Person.prototype.name = "Junho";

let obj = new Person();

let handler = {
    getPrototypeOf: function (target) {
        console.log("getPrototypeOf called");
        return Reflect.getPrototypeOf(target);
    },
    setPrototypeOf: function () { },
    isExtensible: function () { },
    preventExtensions: function () { },
    defineProperty: function () { },
    getOwnPropertyDescription: function () { },
    has: function () { },
    get: function () { },
    set: function () { },
    deleteProperty: function () { },
    ownKeys: function () { },
    apply: function () { },
    construct: function () { },
};

let proxy = new Proxy(obj, handler);

console.dir(proxy);
let proto = proxy.__proto__;
console.dir(proto); 