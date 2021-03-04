let divEvento = document.getElementById('evento');

$(document).ready(function () {

  $.ajax({
    url: './info.json'
  }).done(response => {
    let eventos = response.eventos;
    let id = location.search.match(/id=(\d)*/)[1];

    let eventoDetalle = eventos.find(evento => evento.id == id);

    let htmlEvento = `<div class="col-sm-12 mb-4">
    <div class="card">
      <div class="card-body">
        <h1>${eventoDetalle.nombre}</h1>
        <p>${eventoDetalle.fecha} - ${eventoDetalle.lugar}</p>
        <p class="card-text">${eventoDetalle.descripcion}</p>
        <p class="precio">Costo: ${eventoDetalle.precio}</p>
        <p class="invitados">Invitados: ${eventoDetalle.invitados}</p>
      </div>
    </div>
    </div>`;

    divEvento.innerHTML = htmlEvento;
  });

});
