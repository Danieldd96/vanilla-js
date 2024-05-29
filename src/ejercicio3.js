// Inserte el código aquí
function clonarArreglo(arr){
    return [...arr]
}
clonarArreglo([20,10,"dasda"])
function clonarObjeto(obj){
    return {...obj}
}
clonarObjeto({
    nombre: "Daniel"
})
function sumar(num) {

    
}
function saludar(nombre="Desconocido") {
    return `Hola ${nombre}`;
    
}


// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };