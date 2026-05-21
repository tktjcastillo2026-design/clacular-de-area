function calcularCuadrado() {

    let lado = document.getElementById("lado").value;

    let area = lado * lado;

    document.getElementById("resultadoCuadrado").innerHTML =
        "El área del cuadrado es: " + area;
}

function calcularTriangulo() {

    let base = document.getElementById("base").value;

    let altura = document.getElementById("altura").value;

    let area = (base * altura) / 2;

    document.getElementById("resultadoTriangulo").innerHTML =
        "El área del triángulo es: " + area;
}

function calcularCirculo() {

    let radio = document.getElementById("radio").value;

    let area = Math.PI * radio * radio;

    document.getElementById("resultadoCirculo").innerHTML =
        "El área del círculo es: " + area.toFixed(2);
}