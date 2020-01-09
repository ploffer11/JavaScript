// class Display {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         console.log(this.x, this.y);
//     }

//     foo() {
//         console.log(this);
//     }

//     static bar(x) {
//         console.log(x);
//     }

// }

// const display = new Display(3, 5);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    func() {
        console.log(this.name, this.age);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    func() {
        console.log(this.grade);
    }

}

let stu = new Student(1, 2, 3);
stu.func();

