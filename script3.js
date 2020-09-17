$(document).ready(function() {

  var numeroUtente = 7;

  var endpoint = "https://flynn.boolean.careers/exercises/api/random/int";

  $("#start").click(function() {

    $.ajax(
      {
        "url": endpoint,
        "method": "GET",
        "success": function (data, stato) {
          var rispostaServer = data.response;
          stampaRisultato(numeroUtente, rispostaServer);
        },
        "error": function (richiesta, stato, errori) {
          alert("errore");
        }
      }
    );

  });

  function stampaRisultato(numeroUtente, numServer) {
    console.log(numServer);
    if(numeroUtente > numServer) {
      alert("Ha vinto l'utente");
    } else if (numServer > numeroUtente) {
      alert("Ha vinto il server");
    } else {
      alert("Pari!!");
    }
  }

});
