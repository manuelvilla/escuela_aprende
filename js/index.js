let proximos = [];
let pasados = [];
let divProximos = document.getElementById('proximos');
let divPasados = document.getElementById('pasados');

$(document).ready(function () {

  $.ajax({
    url: './info.json'
  }).done(response => {
    let eventos = response.eventos;
    let fechaActual = response.fechaActual;

    proximos = eventos.filter(evento => evento.fecha > fechaActual) //Filtrar proximos
    pasados = eventos.filter(evento => evento.fecha < fechaActual); //Filtrar pasados

    proximos.sort((a,b) => Date.parse(a.fecha) - Date.parse(b.fecha)); //Ordenar próximos
    pasados.sort((a,b) => Date.parse(b.fecha) - Date.parse(a.fecha)); //Ordenar pasados

    let dosProximos = proximos.slice(0,2); //2 Eventos próximos
    let dosPasados = pasados.slice(0,2); //2 Eventos pasados

    let htmlProximos = ``;
    let htmlPasados = ``;

    dosProximos.map(evento => { //Loop concatenar próximos
      htmlProximos += `<div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <a href="/detalle.html?id=${evento.id}"><h1>${evento.nombre}</h1></a>
          <p>${evento.fecha}</p>
          <p class="card-text">${evento.descripcion}</p>
        </div>
      </div>
      </div>`;
    });

    dosPasados.map(evento => { //Loop concatenar pasados
      htmlPasados += `<div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <a href="/detalle.html?id=${evento.id}"><h1>${evento.nombre}</h1></a>
          <p>${evento.fecha}</p>
          <p class="card-text">${evento.descripcion}</p>
        </div>
      </div>
      </div>`;
    });

    divProximos.innerHTML = htmlProximos; //Cardar proximos en DOM
    divPasados.innerHTML = htmlPasados; //Cardar pasados en DOM

  });

});
