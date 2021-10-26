
 function displayAbbreviations(){
        
    let abbreviations=document.getElementsByTagName('abbr')
    let defs=[]
//获取缩略词，并存入一个数组
    if(abbreviations.length<1) return false
    for(let i=0;i<abbreviations.length;i++){
       if(abbreviations[i].childNodes.length<1) continue
        let definition=abbreviations[i].getAttribute('title')
        let key =abbreviations[i].lastChild.nodeValue
        defs[key]=definition
       
    }
    // console.log(defs)
    //定义列表，并讲缩略词写入列表
    let dList=document.createElement('dl')
    for(key in defs){
        let dTitle=document.createElement('dt')
        let dTitle_text=document.createTextNode(key)
        dTitle.appendChild(dTitle_text)
        // dTitle.innerText=key
        let description=document.createElement('dd')
        let description_text=document.createTextNode(defs[key])
        description.appendChild(description_text)
        // description.innerText=defs[key]
        dList.appendChild(dTitle)
        dList.appendChild(description)
    }
    if (dList.childNodes.length<1) return false
    //将列表append入body
    let header=document.createElement('h2')
    let header_text=document.createTextNode('Abbreviation')
    header.appendChild(header_text)
    document.body.appendChild(header)
    document.body.appendChild(dList)

}

addLoadEvent(displayAbbreviations)