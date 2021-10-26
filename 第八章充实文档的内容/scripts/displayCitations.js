
function displayCitations(){
    let quotes=document.getElementsByTagName('blockquote')
    for(let i=0;i<quotes.length;i++){
        if(!quotes[i].getAttribute('cite')) continue
        let url =quotes[i].getAttribute('cite')

        let quoteChildren=quotes[i].getElementsByTagName('*')
        if(quoteChildren.length<1) continue
        let elem=quoteChildren[quoteChildren.length-1]

        let link=document.createElement('a')
        let link_text=document.createTextNode('source')
        link.appendChild(link_text)
        link.setAttribute("href",url)

        let superscript=document.createElement('sup')
        superscript.appendChild(link)

        elem.appendChild(superscript)
        
    }
}

addLoadEvent(displayCitations)