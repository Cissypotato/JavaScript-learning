

 function moveElement(elementId,final_x,final_y,interval){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementId)) return false;
    let elem=document.getElementById(elementId)

    let xops=parseInt(elem.style.left) 
    let yops=parseInt(elem.style.top) 
    console.log(final_x)
    if(xops==final_x && yops===final_y) return true;
    if(xops<final_x) xops++;
    if(xops>final_x) xops--;
    if(yops<final_y) yops++;
    if(yops>final_y) yops--;

    elem.style.left=xops+'px'
    elem.style.top=yops+'px'
    // let repeat="moveElement('"+elementId+"',"+final_x+","+final_y+","+interval+")"
    let repeat=`moveElement('${elementId}',${final_x},${final_y},${interval})`
    movement=setTimeout(repeat,interval)
}