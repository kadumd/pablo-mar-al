const player = document.querySelector("#player")
const cadeira = document.querySelector("#cadeira")


function jump (){
    setTimeout(() => {
        player.classList.add("pulo")
    setTimeout(() => {
        player.classList.remove("pulo")
    }, 500);
    }, 1);
    
}

const loop = setInterval(() => {
    const posicaoDoMarçal = +window.getComputedStyle (player).bottom.replace ('px', '');
    const posicaoDACadeira = cadeira.offsetLeft
    console.log(posicaoDACadeira)
    console.log(posicaoDoMarçal)
    if (posicaoDACadeira <= 71 && posicaoDACadeira > 0 && posicaoDoMarçal < 245.5) {
        player.style.animation = "none"
        player.style.bottom = `${posicaoDoMarçal}`

        cadeira.style.animation = "none"
        cadeira.style.left = `${posicaoDACadeira}`
        
        console.log("oi")
        clearInterval(loop)
    }

}, 10)

document.addEventListener("keydown", jump)
document.addEventListener("click", jump)