// const buffer = new ArrayBuffer(16);
// const view = new Uint32Array(buffer);
// console.log(buffer.byteLength);

// const buffer = new ArrayBuffer(3);
// const rgb = new Uint8ClampedArray(buffer);

// for (let i = 0; i < 3; i++)
//     rgb[i] = parseInt(Math.random(255) * 100);



let buffer = new ArrayBuffer(16);
let view = new Int16Array(buffer);
let blob = new Blob([view], { type: 'application/octet-binary' });
let url = URL.createObjectURL(blob);
console.log(url);