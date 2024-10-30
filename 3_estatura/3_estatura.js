 /*  Ejercicio donde una persona ingresa su estatura y recibe una respuesta
    es de estatura baja, media o alta*/

    function ejecutarEstatura() {
    const estatura = parseInt(document.getElementById('estatura').value);
    let resultadoAlgoritmo;

    // Validación de la estatura
    if (estatura >= 40 && estatura <= 150) {
        resultadoAlgoritmo = "Su estatura es baja";
    } else if (estatura >= 151 && estatura <= 170) {
        resultadoAlgoritmo = "Su estatura es media";
    } else if (estatura >= 171 && estatura <= 240) {
        resultadoAlgoritmo = "Su estatura es alta";
    } else {
        resultadoAlgoritmo = "Por favor, ingrese una estatura válida";
    }

    // Muestra el resultado en pantalla
document.getElementById('resultado').textContent = resultadoAlgoritmo;
}