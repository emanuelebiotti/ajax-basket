// Utilizzare l’API: https://www.boolean.careers/api/array/basket?n=numberPlayers
// Chiedere all’utente quanti giocatori vuole generare.
// Chiedere all’API i giocatori e stampare a schermo una card per ogni giocatore attraverso handlebars.
// Inizialmente chiamate l'API con un numero fisso stabilito da voi, in modo da interrogare l'API nel modo corretto e stilare le card.
// Poi aggiungete la richiesta del numero dei giocatori all'utente
$(document).ready(function(){


$.ajax({

  'url': 'https://www.boolean.careers/api/array/basket',
  'method': 'GET',
  'data': {
    'n': 3
  },
  'success': function(data){
    var giocatori = data.response;
    console.log(giocatori);

    // var player = {
    //   'playerCode': '' ,
    //   'rebounds': '',
    //   'fouls': '',
    //   'points': '',
    //   'twoPoints': ''
    // }

    // var players = [];

    for (var i = 0; i<giocatori.length; i++){

      var player = {
        'playerCode': giocatori[i].playerCode ,
        'rebounds': giocatori[i].rebounds,
        'fouls': giocatori[i].fouls,
        'points': giocatori[i].points,
        'twoPoints': giocatori[i].twoPoints
      };

      // console.log(player);


    }


  },
  'error': function(){
    alert('errore');
  }

});





});
