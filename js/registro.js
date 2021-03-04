let errores = document.getElementsByClassName('text-danger');

function limpiarErrores(){ //Si se desea validar
  for (var i = 0; i < errores.length; i++){
    errores[i].innerHTML = '';
  }
}

function validar(formulario) {

  let resultadoFinal = false;

  limpiarErrores();

  const {nombres, email, contrasena, confirmacion, tipo, acepto} = formulario;

  for (let i = 0; i < (formulario.length - 3); i++){ //Loop que recorre los 4 primeros inputs
    if(formulario[i].value === ''){
      document.getElementById(`error${formulario[i].name[0].toUpperCase() + formulario[i].name.slice(1).toLowerCase()}`).innerText = 'Este campo es obligatorio';
      resultadoFinal = false;
    } else {
      resultadoFinal = true;
    }
  }

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(email.value) && email.value.length > 0){ //Formato de email
    document.getElementById('errorEmail').innerText = 'Ingresa un email válido';
    resultadoFinal = false;
  } else if (re.test(email.value)){
    resultadoFinal = true;
  }

  if(contrasena.value.length < 6){ //Longitud de al menos 7 caracteres en contraseña
    document.getElementById('errorContrasena').innerText = 'La contraseña debe incluir al menos 7 caracteres';
    resultadoFinal = false;
  } else {
    if(contrasena.value != confirmacion.value){ //Contraseña y confirmación coincidan
      document.getElementById('errorConfirmacion').innerText = 'Las contraseñas deben coincidir';
      resultadoFinal = false;
    } else {
      resultadoFinal = true;
    }
  }

  if(tipo.value == -1){ //Select tipo de usuario
    document.getElementById('errorTipo').innerText = 'Este campo es obligatorio';
    resultadoFinal = false;
  } else {
    resultadoFinal = true;
  }

  if(!acepto.checked){ //Check de términos y condiciones
    document.getElementById('errorAcepto').innerText = 'Este campo es obligatorio';
    resultadoFinal = false;
  } else {
    resultadoFinal = true;
  }

   if(!resultadoFinal){
     return false;
   } else {
     return true;
   }

}
