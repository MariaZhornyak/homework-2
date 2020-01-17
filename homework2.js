//0
let height = 23;
let width = 10;
let s = height * width;
//1
let heightC = 10;
let diameterC = 4;
let v = (diameterC/2)**2 * Math.PI * heightC;
//2
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(m, 2) + Math.pow(n, 2));
//3
let fibonachi1 = 0;
let fibonachi2 = 1;
let fibonachi3 = 1;
let n = 12;
for (let i = 0; i < 12; i++){
    fibonachi3 = fibonach1 + fibonachi2;
    fibonachi1 = fibonachi2;
    fibonachi2 = fibonachi3;
}
alert(fibonachi3);