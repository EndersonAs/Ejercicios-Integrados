//var day = parseInt(prompt("Ingrese un número del 0 al 6"));
function ejecutarDia () {
const day = parseInt(document.getElementById('userInput').value);
let dayName; 

if (isNaN(day) || day < 0 || day > 6) {
    dayName = "Por Favor ingrese un numero del 0 al 6.";
} else {
switch (day) {
 case 0:
     dayName = "Domingo";
     break;
 case 1:
     dayName = "Lunes";
     break;
  case 2:
     dayName = "Martes";
     break;
  case 3:
     dayName = "Miercoles";
     break;
     case 4:
     dayName = "Jueves";
     break;
  case 5:
     dayName = "Viernes";
     break;
 case 6:
     dayName = "Sabado";
     break;
    }
}
document.getElementById('resultado').textContent = dayName; 
//console.log ("Today is " + dayName);
}
