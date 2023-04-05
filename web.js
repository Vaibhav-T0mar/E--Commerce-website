const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar') 
// const allli = document.querySelectorAll('div ul li')
// // console.log(li)
// allli.forEach(li=>{
//     nav.addEventListener('click',(e)=>{
//         e.target.classList.add('active')
        
//     })
    
// })


if (bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('activ')
    })
}
if (close) {
    close.addEventListener('click',()=>{
        nav.classList.remove('activ')
    })
}



