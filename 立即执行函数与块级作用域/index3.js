

{
    let add=function (a,b){
        return a+b
    }
    let subtract=function(a,b){
        return a-b
    }
    var pink=function(){
        console.log('pink')
    }
    window.cc3={subtract,add}
}
//只有let或const才能形成块级作用域，var不行！
pink()
//pink
add()
//index3.js:17 Uncaught ReferenceError: add is not defined
// at index3.js:17