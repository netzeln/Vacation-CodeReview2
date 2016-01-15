$(document).ready(function() {

  $("form.survey").submit(function(event){
    var usa = $("input#usa").prop('checked');
    var distance = $("#distance").val();
    var spend = parseInt($("input[name='optionsSpend']:checked").val());
    var season = $("input[name='optionsSeason']:checked").val();
    var beaches = parseInt($("#beaches").val());
    var snow = $("input#checkSnow").prop('checked');



    if (distance === "yes" ){
      spend = spend + 1;
    } else{

      if (usa === true){
         if (beaches >= 2 && snow === false){
           if(spend <=  2 && season === "summer") {
             var destination = "Duluth";
         } else if (spend >= 2 && beaches >= 3) {
            var destination = "Hawaii";
         } else {
           var destination = "Los Angeles"
         }

       } else if (snow === true && season ==="notSummer"){
           var destination = "Duluth";
         }else {
           var destination = "Kansas City";
         }

      }else {
        if (beaches >= 2){
          if (spend >= 2 ){
          var destination = "Copenhagen";}
          else {
          var destination = "Barcelona"
          }
        }
        else{
          if (spend >= 2 && snow === false && season === "notSummer"){
           var destination = "London"
         } else if(spend >= 2) {
           var destination = "Stockholm"
         } else{
          var destination = "Prague"
        }
        }
      }
  }
    $("#resultText").show();
    $(".yourResult").text("temp dummy text " + " "+ distance + " "+ destination + " " + spend)
   event.preventDefault();
  });


});
