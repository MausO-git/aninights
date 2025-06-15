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