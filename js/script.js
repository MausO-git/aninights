//animation du menu burger
const burg = document.querySelector('#burger')
    console.log(burg)
    burg.addEventListener('click',()=>{
        document.body.classList.toggle('open')
        document.querySelectorAll('.bar')[0].classList.toggle('rotd')
        document.querySelectorAll('.bar')[1].classList.toggle('disp')
        document.querySelectorAll('.bar')[2].classList.toggle('rotup')
    })
//compte à rebours
// Date cible
const targetDate = new Date("July 18, 2025 18:00:00").getTime();
const count = document.querySelector('.countdown');
const phrase = document.querySelector('.countdowns h4')
console.log(phrase)

// Met à jour le compte à rebours chaque seconde
//Convertis les nombre tel que 9 ou 0 en chaîne de caractères à deux digits (0 => 00, 9 => 09)
const formatDoubleDigit = (n)=>{
    return String(n).padStart(2,"0")
}
//grâce à setInterval, la fonction va se répéter toutes les 1000 millisecondes (secondes) sans devoir être appelée
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calcul des jours, heures, minutes et secondes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Affiche le résultat
    count.innerHTML = 
    `${days} : ${formatDoubleDigit(hours)} : ${formatDoubleDigit(minutes)} : ${formatDoubleDigit(seconds)}`;

    // Quand la date est atteinte
    if (distance <= 0) {
    clearInterval(countdown);
    count.innerHTML = "🎉 La fête a commencé !";
    phrase.classList.add('none')
    }
}, 1000);

//animation des personnages

//constante ciblant les personnages
const taki = document.querySelector('.taki')
const mitsu  = document.querySelector('.mitsu')
const chi =  document.querySelector('.chi')
const sho = document.querySelector('.sho')

const info = document.querySelector('.info')
const infoTop = info.offsetTop
const infoHeight = info.clientHeight
const swipe = document.querySelector('.swiper')
const swipeTop = swipe.offsetTop
const swipeHeight = swipe.clientHeight

const anime = ()=>{
    const scrollY = window.scrollY
    const screenHeight = window.innerHeight
    const start1 = infoTop - screenHeight
    const start2 = swipeTop - screenHeight

    if(scrollY >= start1){
        taki.style.transform = `translate(-100%,25%)`
        mitsu.style.transform = `translate(100%,25%)`
        taki.style.display = 'block'
        mitsu.style.display = 'block'
    }else{
        taki.style.transform = ''
        mitsu.style.transform = ''
    }

    if((scrollY >= start1+(infoHeight/4))&&(scrollY < start1+infoHeight*3/4)){
        chi.style.transform = 'translate(0,0)'
    }else{
        chi.style.transform = `translate(-100%,25%)`
    }

    if((scrollY >= start1+infoHeight*3/4) && (scrollY < start2)){
        sho.style.transform = 'translate(0,-45%)'
    }else{
        sho.style.transform = `translate(100%,-45%)`
    }
}

const anime2 = ()=>{
    const scrollY = window.scrollY
    const screenHeight = window.innerHeight
    const start1 = infoTop - screenHeight
    const start2 = swipeTop - screenHeight

    if(scrollY >= start1){
        taki.style.display = `none`
        mitsu.style.display = `none`
    }

    if((scrollY >= start1+(infoHeight/4))&&(scrollY < start1+infoHeight*3/4)){
        chi.style.transform = 'translate(0,0)'
    }else{
        chi.style.transform = `translate(-100%,25%)`
    }

    if((scrollY >= start1+infoHeight*3/4) && (scrollY < start2)){
        sho.style.transform = 'translate(0,-45%)'
    }else{
        sho.style.transform = `translate(100%,-45%)`
    }
}
console.log(scrollY)

window.addEventListener('scroll', anime)

document.addEventListener('DOMContentLoaded', ()=>{
    anime2()
})