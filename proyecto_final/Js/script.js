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
 

 