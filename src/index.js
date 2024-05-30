import { calculadora } from "./calculadora";

function name(operacion,num1,num2) {

    if (operacion=="+") {
      return  calculadora.sumar(num1,num2)
    }
    if (operacion=="-") {
        return calculadora.Resta(num1,num2)
    }
    if (operacion=="*") {
        return calculadora.Multiplicar(num1,num2)
    }
    if (operacion=="/") {
        return  calculadora.Dividir(num1,num2)
    }
}



console.log(name("/",6,2))