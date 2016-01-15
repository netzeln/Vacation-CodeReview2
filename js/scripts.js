$(document).ready(function() {

  $("form.survey").submit(function(event){
    var usa = $("input#usa").prop('checked');
    var distance = $("#distance").val();
    var spend = $("input[name='optionsSpend']:checked").val();
    var season = $("input[name='optionsSeason']:checked").val();
    var beaches = parseInt($("#beaches").val());
    var snow = $("input#checkSnow").prop('checked');
console.log(spend)
         $(".TEST").text(usa +' '+ distance +' '+ spend +' '+ season +' '+ beaches +' '+ snow);
   event.preventDefault();
  });


});
