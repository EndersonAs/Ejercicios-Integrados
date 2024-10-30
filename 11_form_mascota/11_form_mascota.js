function registrarMascota() {
    let mascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipoMascota').value;
    let edad = document.getElementById('edadMascota').value;
    let raza = document.getElementById('razaMascota').value;

    document.getElementById('resultado').innerHTML = `
    <ul>
        <li>Nombre: ${mascota}</li>
        <li>Tipo: ${tipo}</li>
        <li>Edad: ${edad}</li>
        <li>Raza: ${raza}</li>
    </ul>
`;
    
}
