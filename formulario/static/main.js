const ficha = document.getElementById("ficha");
const correo = document.getElementById("correo");
const telefono =document.getElementById("telefono")

ficha.addEventListener('blur', () => {
  // alert(ficha.value)
  if (ficha.value == "") {
    alert("llene al campo ficha")
  } else {
    if (ficha.value == isInteger) {

    }

  }
});



correo.addEventListener('input', function (event) {
  campo = event.target;
    valido = document.getElementById('correoOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
      valido.innerText = " ";
    } else {
      valido.innerText = "Correo no valido"
      valido.classList.add('tooltip');
    
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Obtener el campo de entrada de correo electrónico por su ID
  
    // Función para validar el correo electrónico y cambiar el estilo
    function validarCorreo() {
        let expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let email = correo.value;

        // Verificar si el correo cumple con el formato válido
        if (expresionRegular.test(email)) {
            // Si es válido, eliminar cualquier mensaje de error (si existe)
            correo.setCustomValidity('');
            // Restablecer el estilo del campo de entrada y el tooltip
            correo.style.borderColor = '';
            correo.title = '';
        } else {
            // Si no es válido, establecer un mensaje de error personalizado
            correo.setCustomValidity('Por favor, introduce una dirección de correo electrónico válida.');
            // Cambiar el estilo del campo de entrada y el tooltip a rojo
            correo.style.borderColor = 'red';
            correo.title = 'Por favor, introduce una dirección de correo electrónico válida.';
        }
    }

    // Añadir un listener para el evento 'input' (cuando el usuario escribe en el campo)
    correo.addEventListener('input', validarCorreo);

    // Añadir un listener para el evento 'blur' (cuando el campo pierde el foco)
  correo.addEventListener('blur', validarCorreo);
  
  if(expresionRegular.test(correo)) {
    alert('Correo electrónico válido');
  } else {
    alert('Correo electrónico inválido');
  }

});


telefono.addEventListener("input", function(event) {
    miformulario.codigo.addEventListener("keypress", function(){ 
        return soloNumeros(event);
        }, false);
    });

    //Solo permite introducir números.
    function soloNumeros(e){
    let key = telefono.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        //Usando la definición del DOM level 2, "return" NO funciona.
        e.preventDefault();
    }
}