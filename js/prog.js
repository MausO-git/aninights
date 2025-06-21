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