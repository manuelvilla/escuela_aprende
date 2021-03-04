let pasados = [];
let divPasados = document.getElementById('pasados');

$(document).ready(function () {

  $.ajax({
    url: './info.json'
  }).done(response => {
    let eventos = response.eventos;
    let fechaActual = response.fechaActual;

    pasados = eventos.filter(evento => evento.fecha < fechaActual) //Filtrar proximos

    pasados.sort((a,b) => Date.parse(b.fecha) - Date.parse(a.fecha)); //Ordenar próximos

    let htmlPasados = ``;

    pasados.map(evento => { //Concatenar proximos
      htmlPasados += `<div class="col-sm-12 mb-4">
      <div class="card">
        <div class="card-body">
          <a href="/detalle.html?id=${evento.id}"><h1>${evento.nombre}</h1></a>
          <p>${evento.fecha} - ${evento.lugar}</p>
          <p class="card-text">${evento.descripcion}</p>
          <p class="precio">Costo: ${evento.precio}</p>
        </div>
      </div>
      </div>`;
    });

    divPasados.innerHTML = htmlPasados; //Cardar proximos en DOM
  });

});
