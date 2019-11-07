//alert("hola mundo!")

// Tipos de datos
//  enteros
// flotantes numeros con puto decimal
// strings cualquier letra
// caracteres no existe
// boleanos logica true or false

// Variables

    //var numero

    //typeof()

let numero, numero2
let numeroDos
let numero_dos
let numeroEntero = 1
let numeroFlotante = 2.4
let boleano = false
let string = "Hola otra vez"

// alert(numeroFlotante)

console.log(string)
console.log(numeroEntero)
console.log(numeroFlotante)

console.log(typeof(string))
console.log(typeof(numeroEntero))
console.log(typeof(numeroFlotante))
console.log(typeof(boleano))

function fecha(){
    let etiquetaJS = document.getElementById("UsoDeJS")
    etiquetaJS.innerHTML = Date()
    etiquetaJS.style = "color:blue;font-size:15px;bold;text-align:center"
}

function colorText(){
    let botonColor = document.getElementById("colorText1")
    botonColor.style = "color:blue;font-size:30px;bold"
    botonColor.classList.add("imagenEstilo")
    botonColor.innerHTML = "Azul"
    // alert("done")
}
function logoMostrar(){
    let logoJS = document.getElementById("logo")
    logoJS.classList.add("imagenEstilo")
    logoJS.src = "./imag1/pacman.jpg"
}
function logoEliminar(){
    let logoJS = document.getElementById("logo")
    logoJS.src = ""
}

// etiquetaJS.setAttribute = 


// document.getElementsByClassName("")

// Funciones

// Estructuras de control

// Procedimientos definidos