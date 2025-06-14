const burg = document.querySelector('#burger')
    console.log(burg)
    burg.addEventListener('click',()=>{
        document.body.classList.toggle('open')
        document.querySelectorAll('.bar')[0].classList.toggle('rotd')
        document.querySelectorAll('.bar')[1].classList.toggle('disp')
        document.querySelectorAll('.bar')[2].classList.toggle('rotup')
    })