

function add(a,b){
    return a+"+"+b
}

(function(window){
    function subtract(a,b){
        return a+'-'+b
    }
    window.cc2={subtract}
})(window)