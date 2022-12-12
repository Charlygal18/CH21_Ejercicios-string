//Entrada = Laura Aline
//Salina = enilA aruaL

let str = ""
let nombreNuevo = ""
function alreves(str){
    for (let i = str.length; i >= 0; i--) {
        nombreNuevo += str.charAt(i)
    }
    console.log(nombreNuevo)
}