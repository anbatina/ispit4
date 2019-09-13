

$(document).ready(function(){
    trenutnoVrijeme();

    $("#izracunaj").click(function(){
        var a = $("#stranica_a").val();
        var b = $("#stranica_b").val();

        var c = a*b/2;

        $("#povrsina").val(c);

    });


    $( "#slider-range-min-a" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: 200,
        slide: function( event, ui ) {
            $("#js_stranica_a").val(ui.value);
            povrsina($("#js_stranica_a").val(), $("#js_stranica_b").val())
        }
    });


    $( "#slider-range-min-b" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: 200,
        slide: function( event, ui ) {
            $("#js_stranica_b").val(ui.value);
            povrsina($("#js_stranica_a").val(), $("#js_stranica_b").val())
        }
    });

    $(".menuitem").click(function() {
        //alert("Neimplementirano!");
    });

    $("#obavijest").click(function(){
        $("#povrsinaJSBox").fadeOut();
        $("#povrsinaPHPBox").fadeOut();
        $("#obavijestBox").fadeIn();

        $("#text_obavijest").click(function(e){
          $(this).text('Ispit iz PA3!');
        });
    });

    $("#povrsinajs").click(function(){
        $("#obavijestBox").fadeOut();
        $("#povrsinaPHPBox").fadeOut();
        $("#povrsinaJSBox").fadeIn();
    });

    $("#povrsinaphp").click(function(){
        $("#obavijestBox").fadeOut();
        $("#povrsinaJSBox").fadeOut();
        $("#povrsinaPHPBox").fadeIn();
    });

    $("#izracunajPHP").click( function(e){
      e.preventDefault();
      var form = $(this).parent();
        $.post( "funkcije.php", form.serialize(), function(data) {
         $('#povrsina').val(data)
        })
    });

    function povrsina(a, b) {
      a = parseInt(a);
      b = parseInt(b);

      if(a && b) {
        $('#js_povrsina').text(a*b/2)
      } else {
        $('#js_povrsina').text('')
      }
    }

    function trenutnoVrijeme() {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
      $('#footer').text(dateTime);
      setTimeout(trenutnoVrijeme, 1000)
    }
});
