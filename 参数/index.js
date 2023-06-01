


//默认参数
function sum(a,b=1){
    return a+b
}
console.log(sum(1))
console.log(sum(1,3))


//arguments
function sum1(){
    console.log(arguments)
    console.log(arguments[arguments.length-1])
    // arguments.reduce((a,b)=>a+b)
}
sum1(19,88,04,16)

//Arguments(4) [19, 88, 4, 16, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//16
//index.js:14 Uncaught TypeError: arguments.reduce is not a function
// at sum1 (index.js:14)
// at index.js:16


function sum2(){
    var args = Array.prototype.slice.call(arguments);
    //es6类数组转数组方法
    // let args=Array.from(arguments)
    // let args=[...arguments]
    console.log(args)
    console.log(args.reduce((a,b)=>a+b))
    return args.reduce((a,b)=>a+b)
}
sum2(19,88,4,16)
// (4) [19, 88, 4, 16]
//  127



//剩余参数 
function sum3(...rest){
    console.log(rest)
}
sum3(19,88,4,16)
// (4) [19, 88, 4, 16]
function sum4(a,b,...rest){
    console.log(rest)
}
sum4(19,88,4,16)
//(2) [4, 16]