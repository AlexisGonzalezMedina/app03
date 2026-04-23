

const inputCantidad = document.getElementById('cantidad')
const selectorOrigen = document.getElementById('monedaOrigen')
const selectorDestino = document.getElementById('monedaDestino')
const BCalcular = document.getElementById('botonConvertidor')
const BLimpiar = document.getElementById('botonLimpiar')
const spanError = document.getElementById('cantidad-error')
const textoResultado = document.getElementById('textoResultado')


class Convertidor {
    constructor() {
        this.tasaCambio = {
            "USD":{EUR: 0.92, MXN: 17.05, CAD: 1.35, USD: 1},
            "EUR":{USD: 1.09, MXN: 18.50, CAD: 1.47, EUR: 1},
            "MXN":{USD: 0.059, EUR: 0.054, CAD: 0.079, MXN: 1},
            "CAD":{USD: 0.74, EUR: 0.68, MXN: 12.60, CAD: 1}
        }
    }

    procesarCalculo(cantidad, monedaOrigen, monedaDestino) {
        const tasa = this.tasaCambio[monedaOrigen][monedaDestino]
        return (cantidad * tasa).toFixed(2);
    }
}

const miConvertidos = new Convertidor()

function validarCantidad(){
    const valor = inputCantidad.value
    if (valor === "" || parseFloat(valor) <= 0) {
        spanError.textContent = "Ingresa una cantidad válida"
        return false;
    }
    spanError.textContent = ""
    return true
}

function calcular(){
    if (validarCantidad()){
        const cantidad = parseFloat(inputCantidad.value)
        const monedaOrigen = selectorOrigen.value
        const monedaDestino = selectorDestino.value

        const resultado = miConvertidos.procesarCalculo(cantidad, monedaOrigen, monedaDestino )

        textoResultado.innerHTML = `${cantidad} ${monedaOrigen} son ${resultado} ${monedaDestino}`
    }
}

function Limpiar(){
    inputCantidad.value = ""
    textoResultado.textContent = "Ingresa la Cantidad a Convertir"
    spanError.textContent = ""
    selectorOrigen.selectedIndex = 0
    selectorDestino.value = "USD"
}

function iniciar(){
    BCalcular.addEventListener('click', calcular)
    BLimpiar.addEventListener('click', Limpiar)
}

window.addEventListener('load', iniciar)



