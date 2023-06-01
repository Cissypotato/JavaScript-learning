

function star(num){
    if(num==0){
        return 0
    }
    document.write("*".repeat(num--) +"</br>")
    return star(num)
}

star(9)