

let a =1
let b=1

let c=a++
console.log(c,'c')//1
console.log(a,'a')//2

let d=++b
console.log(d,'d')//2
console.log(b,'b')//2

let e=++a +5 + b++
console.log(e,'e')//10 2+5+3

let j=0

for(let i=0;i<10;i++){
    j=j++
    console.log(j,'j')
}