//animation du menu burger
const burg = document.querySelector('#burger')
    console.log(burg)
    burg.addEventListener('click',()=>{
        document.body.classList.toggle('open')
        document.querySelectorAll('.bar')[0].classList.toggle('rotd')
        document.querySelectorAll('.bar')[1].classList.toggle('disp')
        document.querySelectorAll('.bar')[2].classList.toggle('rotup')
    })

//compteurs pour tickets
const counters = document.querySelectorAll('.counter')
let countValue = [0, 0, 0] 
let x = 0
counters.forEach((counter, x)=>{
    console.log(counter)
    const plus = counter.querySelector('.plus')
    //console.log(plus)
    const min = counter.querySelector('.min')
    const count = counter.querySelector('.count')
    count.textContent = countValue[x]
    const tAdulte = 7.5
    const tEtud = 6.5
    const tEnfant = 5
    const price = document.querySelector('.sum .number')
    let tTot = 0
    price.textContent = tTot

    let value = parseInt(count.textContent)
    
    plus.addEventListener('click', ()=>{
        value++
        count.textContent = value
        countValue[x] = value
        console.log(countValue)
        let tTot = (tAdulte*countValue[0])+(tEtud*countValue[1])+(tEnfant*countValue[2])
        price.textContent = tTot
    })
    min.addEventListener('click', ()=>{
        if(value > 0){
            value--
            count.textContent = value
            countValue[x] = value
            console.log(countValue)
            let tTot = (tAdulte*countValue[0])+(tEtud*countValue[1])+(tEnfant*countValue[2])
            price.textContent = tTot
        }
    })
})
//ajoute une margin en bas de la zone des tickets si elle dépasse 80% de la hauteur de l'écran
const zone = document.querySelector('.slide .wrapper')
const parent = zone.parentElement
const addMargin = ()=>{
    const zoneHeight = zone.clientHeight
    const screenHeight = window.innerHeight
    if(parent.id == 'tickets'){
        if(zoneHeight > screenHeight*0.8){
            zone.style.marginBottom = `50px`
        }else{
            zone.style.marginBottom = '0'
        }
    }
    if(parent.id == 'contact'){
        if(zoneHeight > screenHeight*0.6){
            zone.style.marginBottom = `50px`
        }else{
            zone.style.marginBottom = '0'
        }
    }
}
window.addEventListener('resize', addMargin)
window.addEventListener('load', addMargin)



