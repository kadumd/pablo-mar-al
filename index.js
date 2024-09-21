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
    if (posicaoDACadeira <= 106.2 && posicaoDACadeira > 0 && posicaoDoMarçal < 200) {
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

function fases() {
    setTimeout(() => {
        cadeira.style.animation = "ola 1s infinite linear"
        console.log("ola")
    }, 30000);
}
fases()