let str = ""
let nombreNuevo = ""

function palindromo(str){
    str = str.toLowerCase();
    for (let i = str.length; i >= 0; i--) {
        nombreNuevo += str.charAt(i)
    }
    let res = false;
    if(nombreNuevo == str){
        res = true;
    }
    console.log(res)
}