let proximos = [];
let divProximos = document.getElementById('proximos');

$(document).ready(function () {

  $.ajax({
    url: './info.json'
  }).done(response => {
    let eventos = response.eventos;
    let fechaActual = response.fechaActual;

    proximos = eventos.filter(evento => evento.fecha > fechaActual) //Filtrar proximos

    proximos.sort((a,b) => Date.parse(a.fecha) - Date.parse(b.fecha)); //Ordenar próximos

    let htmlProximos = ``;

    proximos.map(evento => { //Concatenar proximos
      htmlProximos += `<div class="col-sm-12 mb-4">
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

    divProximos.innerHTML = htmlProximos; //Cardar proximos en DOM
  });

});
