

function add(a,b){
    return a+b
}

(function(window){
    function add(a,b){
        return a+b
    }
    function subtract(a,b){
        return a-b
    }
    window.cc1={subtract,add}
})(window)