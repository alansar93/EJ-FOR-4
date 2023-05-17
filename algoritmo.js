const CANT_IMG = document.querySelector("input");
const DIVISION = document.querySelector("div")
const IMAGEN = document.querySelector("img")


function cantImg() {
    cantImgUsuario = CANT_IMG.value
    DIVISION.innerHTML = ""

    for (let i = 0; i < cantImgUsuario; i++) {
        DIVISION.innerHTML +=  `<img src="https://fotos.perfil.com/2023/03/13/trim/720/410/enzo-perez-1526405.jpg" alt=""></img>`
    }

}