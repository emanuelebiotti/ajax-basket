$(document).ready(function(){

var num_giocatori;

var source   = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

$('input').keypress(function(event){
  if(event.which == 13) {
    $('.card_container').empty();
    ricerca();
    $('input').val('');
  }
})

function ricerca() {
  num_giocatori = $('input').val();

  $.ajax({
    'url':'https://www.boolean.careers/api/array/basket?',
    'method': 'GET',
    'data': {
      'n': num_giocatori
    },
    'success':function(info){
      console.log(info.response);

      for (var i = 0; i <num_giocatori; i++) {
        var giocatore = {
          'fouls': info.response[i].fouls,
          'playerCode': info.response[i].playerCode,
          'points': info.response[i].points,
          'rebounds': info.response[i].rebounds,
          'threePoints': info.response[i].threePoints,
          'twoPoints': info.response[i].twoPoints
        }
        var html = template(giocatore);
        $('.card_container').append(html);
      }
    },
    'error': function(){
      alert('errore');
    }
  })
}

});
