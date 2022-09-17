if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

let openTab = document.querySelector('.tab button')
let tab = document.querySelector('.tab')
let insideTab = document.querySelectorAll('.insideTab')
let opened = false

for(let i = 0; i < insideTab.length; i++){
    console.log(insideTab[i])
    insideTab[i].style['transform'] = 'translateX(20px)'
}

openTab.addEventListener('click', () => {
    
    if(!opened){
        opened = true
        tab.style['width'] = '50vw'
    }else{
        opened = false
        tab.style['width'] = '20px'
    }
    
})