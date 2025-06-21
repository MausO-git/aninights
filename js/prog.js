//animation du menu burger
const burg = document.querySelector('#burger')
console.log(burg)
burg.addEventListener('click',()=>{
    document.body.classList.toggle('open')
    document.querySelectorAll('.bar')[0].classList.toggle('rotd')
    document.querySelectorAll('.bar')[1].classList.toggle('disp')
    document.querySelectorAll('.bar')[2].classList.toggle('rotup')
})

//animatioin de la programmation

const progs = document.querySelectorAll('.prog')
progs.forEach(prog=>{
    const day = prog.querySelector('.day')
    day.addEventListener('click',()=>{
        prog.classList.toggle('open')
    })
})


//scroll auto

// const filminfos = document.querySelectorAll('.films-infos')
// let dir = 1
// const speed = 2
// const pauseDuration = 2000
// let nextDir

// filminfos.forEach(filminfo=>{
//     setInterval(()=>{
//         if(dir !== 0){
//             filminfo.scrollLeft += dir*speed
    
//             const maxScroll = filminfo.scrollWidth - filminfo.clientWidth
    
//             if(filminfo.scrollLeft >= maxScroll || filminfo.scrollLeft <= 0){
//                 nextDir = (filminfo.scrollLeft <= 0) ? 1 : -1
//                 dir = 0

//                 setTimeout(() => {
//                     dir = nextDir
//                 }, pauseDuration);
//             }
             
//         }
//     }, 40)
// })