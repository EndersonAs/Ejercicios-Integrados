
    /* Ejercicio si una persona puede entrar al boliche si es mayor de edad  y tiene o no cedula*/
       
    function ejecutarEdad (){
        // Obtiene el valor de la edad y convierte a número
        let edad = parseInt(document.getElementById('userInput').value);
         // Obtiene el valor del checkbox (true si está marcado, false si no lo está)
        let cedula = document.getElementById('exampleCheckbox').checked;
        let autorizado;
        if ((edad >= 18) && (cedula)) {
            autorizado = "Usted Puede ingresar";
            }else { 
            autorizado ="Usted No Puede ingresar";
            }    
            
            // Muestra el resultado en pantalla
            document.getElementById('resultado').textContent = autorizado;
    }
  
    
    /*
    function entrada(Edad, Cedula){
        let autorizado=""; 
        if ((Edad >= 18) && (Cedula)) {
        autorizado = "Usted Puede ingresar";
        }else { 
        autorizado ="Usted No Puede ingresar";
        }    
        return autorizado;   
        }
        
        var Edad = 0;
        Edad = prompt("Ingrese su Edad");
        var Cedula = confirm("si trajo su Cedula dar en Aceptar en caso contrario en Cancelar");
        //
        alert("DECISIÓN DEL BOLICHE: " + entrada(Edad, Cedula ));
      */
    /*
    var Edad = 0;
    Edad = prompt("Ingrese su Edad");
    var Cedula = confirm("si trajo su Cedula dar en Aceptar en caso contrario en Cancelar");

    if ((Edad >= 18) && (Cedula)) {
        alert("Usted Puede ingresar");
    }else { 
        alert("Usted No Puede ingresar");
    }
    /*En este ejercicio se tomo una caracteristicas de los valores
     "truthy" y "falsy" en JavaScript sin necesidar de usar el operador == dentro de if */ 