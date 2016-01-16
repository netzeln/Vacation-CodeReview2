$(document).ready(function() {

  $("form.survey").submit(function(event){
    var usa = $("input#usa").prop('checked');
    var distance = $("#distance").val();
    var spend = parseInt($("input[name='optionsSpend']:checked").val());
    var season = $("input[name='optionsSeason']:checked").val();
    var beaches = parseInt($("#beaches").val());
    var snow = $("input#checkSnow").prop('checked');



    if (distance === "yes" || (distance === "either" && usa === true)){
      var spend = spend - 1;
    }



      if ((usa === true && distance === "no") || (usa === false && distance !== "no")){
         if (beaches >= 2 && snow === false){
           if(spend <=  2 && season === "summer") {
             var destination = "Duluth, MN";
             var simpleDest = "DLH";
         } else if (spend >= 2 && beaches >= 3) {
            var destination = "Honolulu, Hawaii";
            var simpleDest = "HNL";
         } else {
           var destination = "Los Angeles, CA"
           var simpleDest = "LAX";
         }

       } else if (snow === false && season === "notSummer"){
           var destination = "Kansas City, MO";
           var simpleDest = "MCI";
         }else {
           var destination = "Duluth, MN";
           var simpleDest = "DLH";
         }

      }else {
        if (beaches >=3){
          var destination ="Barcelona, Spain"
          var simpleDest = "BCN";
        }else if (beaches === 2){
           if (spend >= 2 ){
             var destination = "Copenhagen, Denmark";
             var simpleDest = "CPH";
         } else {
             var destination = "Barcelona, Spain"
             var simpleDest = "BCN";
          }
        }
        else{
          if (spend >= 2 && snow === false && season === "notSummer"){
            var destination = "London, UK";
            var simpleDest = "LHR";
         } else if(spend >= 2 || (spend >= 1 && season === "notSummer")) {
            var destination = "Stockholm, Sweden";
            var simpleDest = "ARN";
         } else{
          var destination = "Prague, Czech Republic";
          var simpleDest = "PRG";
          $(".aboutDestination").empty().append("Based on your selections we recommend you go to:... <span class='destination'>" + destination + "</span>!");
          }
        }
      }

    $("#resultText").show();
    $(".yourResult").empty().append("Based on your selections we recommend you go to:... <span class='destination'>" + destination + "</span>!");

    $(".images").empty().append('<img class="img-rounded" class="img-responsive" src="img/'+ simpleDest +'.jpg">');

    if (simpleDest === "DLH") {
      $("#aboutDestination").empty().html("Duluth is truly a 'cool' city. Boasting 'Park Point,' the worlds longest freshwater sandbar, it has almost 5 miles of sand beaches. Recently named Outside Magazine's 'outdoor city of the year,' it is a biker or paddler's paradise in the summer, and a winter sports enthusiast's playground in the winter</p>");
    } else if (simpleDest === "PRG") {
      $("#aboutDestination").empty().html("Settled farther in the continent, Prague has <ul><li>Charming Architecture</li><li>Lots of Classical Music, AND</li><li><em>Cheap</em> Beer!</li></ul> ");
    }else if (simpleDest === "MCI") {
      $("#aboutDestination").empty().html("Kansas City is an overlooked gem in the heartland of the US. It Boasts <ul><li>The Royals</li><li>Lots of fountains, AND</li><li><em>Amazing</em> Barbecue!</li></ul> ");
    }else if (simpleDest === "LHR") {
      $("#aboutDestination").empty().html("London can be expensive, but it's one of the great cultural cities of the world. You can:<ul><li>See London Bridge</li><li>See the Tower of London, AND</li><li>Pretend to be Sherlock Holmes</li></ul> ");
    }else if (simpleDest === "BCN") {
      $("#aboutDestination").empty().html("Barcelona is probably the best City in Europe. It has many fantastic things<ul><li>Amazing Architecture</li><li>Great Museums,</li><li><em>Many</em> Great Beaches!</li><li>and, most importantly:<strong>Jamon Iberico de Bellota</strong></ul> ");
    }else if (simpleDest === "CPH") {
      $("#aboutDestination").empty().html("Almost as great as Barcelona,  Copenhagen is an amazing city with a lot to offer. <ul><li>Amazing Restaurants</li><li>Kayaking, Biking, Walking</li><li> HOWEVER, it's quite <em>Expensive</em> !</li></ul> ");
    }else if (simpleDest === "LAX") {
      $("#aboutDestination").empty().html("California has a bit of everything, and is great year round<ul><li>Beaches</li><li>Movie Stars,AND</li><li> it's not far from<em>Disneyland</em>!</li></ul> ");
    }else if (simpleDest === "ARN") {
      $("#aboutDestination").empty().html("Stockholm, while expensive, is a beautiful city built on an archipelago. It can get cold in the winter. <ul><li>Outdoor Museums</li><li>IKEA, BUT</li><li><em>Expensive</em> Beer!</li></ul> ");
    }else if (simpleDest === "HNL") {
      $("#aboutDestination").empty().html("Hawaii! Surf! Beach! Hike!. <ul><li>Many Islands to Explore</li><li>Ukuleles, AND</li><li>Barbecue with Noodle Salad</li></ul> ");
    }

   event.preventDefault();
  });


});
