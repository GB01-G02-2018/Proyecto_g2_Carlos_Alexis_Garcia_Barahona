 //tomamos la altura   
 var altura = $('nav').offset().top;
 //verificamos el scroll
 $(window).on('scroll', function () {
     //si escroll es mayor a altura
     if ($(window).scrollTop() > altura) {
         $('nav').addClass('fixed-top');
     } else {
         $('nav').removeClass('fixed-top');
     }
 });
//samsung
 $("#parrafo_note").mouseover(function(){
    $("#parrafo_note").css("background-color", "black");
});
$("#parrafo_note").mouseout(function(){
    $("#parrafo_note").css("background-color", "");
});
//xiami
$("#parrafo_xiomi").mouseover(function(){
    $("#parrafo_xiomi").css("background-color", "black");
});
$("#parrafo_xiomi").mouseout(function(){
    $("#parrafo_xiomi").css("background-color", "");
});
$("#parrafo_xiomi_2").mouseover(function(){
    $("#parrafo_xiomi_2").css("background-color", "black");
});
$("#parrafo_xiomi_2").mouseout(function(){
    $("#parrafo_xiomi_2").css("background-color", "");
});
//oneplus
$("#parrafo_oneplus").mouseover(function(){
    $("#parrafo_oneplus").css("background-color", "black");
});
$("#parrafo_oneplus").mouseout(function(){
    $("#parrafo_oneplus").css("background-color", "");
});
//mostra y oculatr ista samsung
$(document).ready(function(){
    $("#oculatar_note9").click(function(){
        $("#lisa_note9").slideToggle("slow");
    });
});
//mostrar y ocultar xiomi
$(document).ready(function(){
    $("#ocultar_xiamoi").click(function(){
        $("#xiomi_seccion").slideToggle("slow");
    });
});
//mostrar y ocultar oneplus
$(document).ready(function(){
    $("#ocultar_oneplus").click(function(){
        $("#seccion_oneplus").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "silver");
    });
    $("input").blur(function(){
        $(this).css("background-color", "black");
    });
});


 

 