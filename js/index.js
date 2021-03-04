let proximos = [];
let pasados = [];

$(document).ready(function () {

  $.ajax({
    url: './info.json'
  }).done(response => {
    let eventos = response.eventos;
    let fechaActual = response.fechaActual;

    proximos = eventos.filter(evento => evento.fecha > fechaActual); //Filtrar proximos
    pasados = eventos.filter(evento => evento.fecha < fechaActual); //Filtrar pasados

    console.log(proximos);
    console.log(pasados);

    proximos.sort((a,b) => Date.parse(b.fecha) - Date.parse(a.fecha));

    console.log(proximos);
    console.log(pasados);

  });

  //Clasifica los eventos segun la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Extrae solo dos eventos

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Extrae solo dos eventos

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

});
