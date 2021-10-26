
function styleHeaderSiblings(){
    if(!document.getElementsByTagName) return false;
    let headers=document.getElementsByTagName('h1')
    let elem
    for(let i=0;i<headers.length;i++){
        elem=getNextElement(headers[i].nextSibling)
        console.log(headers[i].nextSibling)
        elem.style.fontWeight='bold'
        elem.style.fontSize='1.2em'
    }
}

function getNextElement(node){
    console.log(node.nodeType)
 if(node.nodeType==1){
     console.log(1111)
     return node
 }  
 if (node.nextSibling){
    console.log(2222)
     return getNextElement(node.nextSibling)
 }
 console.log(3333)
 return null
}

addLoadEvent(styleHeaderSiblings)