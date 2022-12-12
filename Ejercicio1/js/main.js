let nombre = "Abraham";
nombre = nombre.toLowerCase();
let contador = 1;
let letra = "";
let contFinal = 0;

for (let i = 0; i < nombre.length; i++){
    console.log(nombre.charAt(i))
    let contTemp = 1;
    for (let j = i+1;j < nombre.length; j++) {
       if(nombre.charAt(i) == nombre.charAt(j)){
        contTemp++;
       }
    }
    if (contFinal<contTemp){
        contFinal=contTemp;
        letra = nombre.charAt(i);
    }
}
console.log(letra,contFinal)



/*for(let i = 0; i < nombre.length;  i++){
    if(nombre[i+1] === nombre[i]){
        contador++
        console.log()
    }
    else{
        elementos.push(nombre[i]);
        vecesRepetidas.push(contador);
        contador = 1
    }
}
for (let j = 0; j < vecesRepetidas.length; j++) {
    if(vecesRepetidas(j) > vecesRepetidas(j+1)){
        console.log("La letra que más se repite es: " + vecesRepetidas(i))
    }
    
}*/