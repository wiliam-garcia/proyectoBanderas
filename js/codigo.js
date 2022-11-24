console.log("Hola Mundo")

function esconderBandera(nombre){
    document.getElementById(nombre).style.display = 'none'
}

function ocultarBanderas(){
    for (let i = 1; i <= 5; i++) {
        esconderBandera('ejercicio'+i)
    }
}

function mostrarBandera(nombre){
    document.getElementById(nombre).style.display = 'contents'
}

function selectorBandera(){
    ocultarBanderas()
    let select = document.getElementById('select')
    mostrarBandera(select.value)
}

ocultarBanderas()
let select = document.getElementById('select') 
select.onchange = selectorBandera
mostrarBandera(select.value)