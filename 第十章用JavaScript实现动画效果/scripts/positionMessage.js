

 function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById('message')) return false;
    let elem=document.getElementById('message')
    elem.style.position='absolute'
    elem.style.top='100px'
    elem.style.left='50px'
    moveElement('message',500,300,10)

    if(!document.getElementById('message2')) return false;
    let elem2=document.getElementById('message2')
    elem2.style.position='absolute'
    elem2.style.top='50px'
    elem2.style.left='50px'
    moveElement('message2',125,125,20)
}