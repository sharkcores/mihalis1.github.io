

let openTab = document.querySelector('.tab button')
let tab = document.querySelector('.tab')
let insideTab = document.querySelectorAll('.insideTab')
let opened = false

const observer = new IntersectionObserver ((ent) => {
    ent.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hidden = document.querySelectorAll('.hidden')
hidden.forEach((el) => observer.observe(el));

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


