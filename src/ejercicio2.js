class Contador {
  // Inserte el código aquí
  valor=0
  constructor(valor){
    this.valor = valor
  }
  siguiente(valor){
    return this.valor++
  }
}
let instancia = new Contador()
export { instancia }