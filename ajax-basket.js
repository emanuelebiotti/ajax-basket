// Utilizzare l’API: https://www.boolean.careers/api/array/basket?n=numberPlayers
// Chiedere all’utente quanti giocatori vuole generare.
// Chiedere all’API i giocatori e stampare a schermo una card per ogni giocatore attraverso handlebars.
// Inizialmente chiamate l'API con un numero fisso stabilito da voi, in modo da interrogare l'API nel modo corretto e stilare le card.
// Poi aggiungete la richiesta del numero dei giocatori all'utente
$(document).ready(function(){

  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  // var context = {
  //   playerCode: "",
  //   rebounds: "",
  //   fouls: "",
  //   points: "",
  //   twopoints: ""
  // };

  // var html = template(context);

  // console.log(html);

  $.ajax({

    'url': 'https://www.boolean.careers/api/array/basket',
    'method': 'GET',
    'data': {
      'n': 24
    },
    'success': function(data){
      console.log(data.response);

      $('input').keypress(function(event){
      // se il tasto premuto è "invio"
        if(event.which == 13) {
        var numerogiocatori = $('input').val();

          for (var i = 0; i < numerogiocatori; i++) {

            var context = {
              playerCode: data.response[i].playerCode,
              rebounds: data.response[i].rebounds,
              fouls: data.response[i].fouls,
              points: data.response[i].points,
              twoPoints: data.response[i].twoPoints,
            };


            var html = template(context);
            $('.container').append(html);
            $('input').val('');

          }
        }
    });

    },
    'error': function(){
      alert('errore');
    }

  });



});
