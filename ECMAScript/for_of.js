arr = [1, 2, 3];
arr.something = "hello";

for (let i in arr)
    console.log(i);

for (let i in arr)
    console.log(i + 1);

for (let i of arr)
    console.log(i);

for (let i of arr)
    console.log(i + 1);