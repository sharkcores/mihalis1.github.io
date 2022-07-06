// //force https

// if (location.protocol !== 'https:') {
//     location.replace(`https:${location.href.substring(location.protocol.length)}`);
// }

let header = document.querySelector('header')
let windowY

document.addEventListener('scroll', (a) => {
    windowY = window.scrollY
    if(windowY == 0){

    }
    console.log(windowY)
})


