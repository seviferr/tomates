
$(function() {



    var $form = $('#ajaxForm');



    $form.submit(function(e) {
        // e.preventDefault()
        // if(checkValidity())

        $('#ajax-info').html('<img src="imagenes/ajax-loader.gif" />');


        

        $.ajax({
            
            type: "POST",
            url: "../php/ajax-action.php",

            data: {
                name: $("#ajax-name").val(),
                surname:$("#ajax-surname").val(),
                email: $("#ajax-email").val(),
                phone:$("#ajax-phone").val(),
                text:$("#ajax-text").val()
            }

        }).success(function(response) {

            

            if(response == "OK") {

                // $form.submit();

                $('#ajax-info').html('sent! =)');


            } else if(response == "validation_error") {
            

                $('#ajax-info').html('<span class="error">Validation error!</span>');
                

            } else{

                $('#ajax-info').html(response);


            }

        }); 


        return false;

    });
});


$(function() {



    var $forma = $('#ajaxForm2');



    $forma.submit(function(e) {
        // e.preventDefault()
        // if(checkValidity())

        $('#ajax-informacion').html('<img src="imagenes/ajax-loader.gif" />');


        

        $.ajax({
            
            type: "POST",
            url: "../php/ajax-action2.php",

            data: {
                numeropersonas :$("#ajax-personas").val(),
                numerocomidas :$("#ajax-comidas").val(),
                fechainicial :$("#ajax-fechainicio").val(),
                fechafinal :$("#ajax-fechafin").val(),
                primernombre: $("#ajax-primernombre").val(),
                apellidos: $("#ajax-apellidos").val(),
                correo: $("#ajax-correo").val(),
                telefono: $("#ajax-telefono").val()
            }

        }).success(function(respuesta) {

            

            if(respuesta == "Correo Enviado") {

                // $form.submit();

                $('#ajax-informacion').html('enviado! =)');


            } else if(respuesta == "error de validación") {
            

                $('#ajax-informacion').html('<span class="error">Error de validación!</span>');
                

            } else{

                $('#ajax-informacion').html(respuesta);


            }

        }); 


        return false;

    });
});
var nombrefoto = "";
var opcionElegidaTest = "";
var indicefotos = "";
var nombreclase = "";
var fotoselegidas = "";
var habitaciones = ["Dormitorio suite","Cuarto bodega aceite","Dormitorio primera planta",
"Dormitorio primera planta","Chimenea del salon","Dormitorio principal primera planta",
"Baño primera planta","Cocina"];

var patio = ["","","",
"","","","",""];

var entorno = ["Arrozales de Calasparra","Comienza la primavera","Frutales desde la casa",
"El valle de Burete","Mochón de Cieza","Camino hacia la casa","Cehegín","Vistas del valle"];

var actividades = ["relajación","Saludo al sol","Melocotón en conserva",
"Con la profe detrás","Preparando la fruta","Preparación de la conserva","Frutas recogidas","Sabado: practicando en el agua"];

var nombre = "Nombre: Magdalena Parreño";
var alturaventana = $('.ventana').height();
var alturaheader = $('.header').height();
var anchurawindow = $(window).width();
var alturawindow = $(window).height();

$(document).ready(function() {  

 if (navigator.appName == 'Microsoft Internet Explorer')
    {
     $('.pantallaexplorer').show().css({'width':anchurawindow, 'height':alturawindow});
    };



  $( window ).resize(function() {
        var panta = "anchura:" + $(window).width() + "altura:" + $(window).height();
        $( "#tamanopantalla" ).text(panta);
});

$('.contieneopciones').click(function(){
       $('.pull-rightoculto').toggle();
    });

    if((anchurawindow < 400) || (anchurawindow === 400)) {
        alturaheader = 667;
    }
     if ((alturawindow <400) || (alturawindow === 400)) {
        $('.visorfoto').css({'width':'70%'});
     }


    $('.linkpilateinfo').click(function(e){
        e.preventDefault();
        $('.lacasa, .casatexto').hide();
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
        $('.pilateoculto, .lospilates').fadeIn(600);
    })

    $('.linktomateinfo').click(function(e){
        e.preventDefault();
        $('.lacasa, .casatexto').hide();
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
        $('.tomateoculto, .lostomates').fadeIn(600);
    })

    $('.linkretorno').click(function(e){
        e.preventDefault();
        $('.tomateoculto, .pilateoculto, .lospilates, .lostomates').hide();
        $('.lacasa, .casatexto').fadeIn(600);
    })

    $('.linkpilateinfo, .linktomateinfo, .linkretorno').hover( function(){
        $(this).css("color","orange").fadeTo(600,0.8);
            },
            function(){
        $(this).stop(true).css("color","red").fadeTo(600,1);
            });
    
    var arrayComentarios = function(nombreestancia, indiceestancia){
        if(nombreestancia === "habitaciones") { 
            var contenidoarray = habitaciones[indiceestancia];
            $('.comentariofoto').text(contenidoarray);
        } else if(nombreestancia === "patio") {
            var contenidoarray = patio[indiceestancia];
            $('.comentariofoto').text(contenidoarray);
        }  else if(nombreestancia === "entorno") {
            var contenidoarray = entorno[indiceestancia];
            $('.comentariofoto').text(contenidoarray);
        }   else if(nombreestancia === "actividades") {
            var contenidoarray = actividades[indiceestancia];
            $('.comentariofoto').text(contenidoarray);
        }
    }
    var verfotos = function() {
        nombrefoto = fotoselegidas.slice(9);
        var atributofoto = "imagenes/" + nombrefoto + indicefotos +".jpg";
        arrayComentarios(nombrefoto, indicefotos);
        $('.expofoto, .textofotos').fadeIn(600);
        $('.fotoactual').attr("src",atributofoto);

    }
     var mascara = function(){
        $('.main, .zonasfoto, .actividad, .zonaalrededores, .mapasitio, .formulario, .consultaprecios, .formularioreservas').fadeOut(600).animate({top:700},1);
        $('.expofoto, .textofotos').hide();
       $('#capatransparente').fadeOut(600);
        
       // $('#capatransparente').css({'height':maskHeight});  
        $('#capatransparente').fadeIn(1000);      
        $('#capatransparente').fadeTo(400,0.9);   
    };

   
    
   //ELECCION DE LA ZONA PARA VER LAS FOTOGRAFÍAS
    
    $('.container, .primero, .mosaico').click( function() {
        indicefotos = 0;
        $('.main, .zonasfoto, .actividad').fadeOut(600).animate({top:700},1);

        //$('.header, #fondoheader, #piepagina').hide();
        $('#capatransparente').fadeOut(600);
        fotoselegidas = $(this).find('strong').attr("class");
        verfotos();
        
    })

    $('.mosaico').click( function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 0);
    })

    //comportamiento de las flechas para pasar las fotos
    $('.flechaderecha').click( function() {
        indicefotos +=1;
        if (indicefotos > 7) {
            indicefotos = 0;
        }
        verfotos();
    })   
    $('.flechaizquierda').click( function() {
        indicefotos -=1;
        if (indicefotos < 0) {
            indicefotos = 7;
        }
        verfotos();
    })
    $('.cerrar').click( function() {
        indicefotos = 0;
        opcionElegidaTest = "fotos";
        $('.expofoto, .textofotos').hide();
        mascara();
        $('#fondoheader, #piepagina, .header').fadeIn(800);
        $(".zonasfoto").fadeIn(400).animate({top: alturaheader},400);
    })

    $('.container img, .primero, .mosaico img').hover( function(){
         $(this).fadeTo(300,0.6);
            },
            function(){
        $(this).stop(true).fadeTo(300,1);
            });


    /* $('.container img').click( function(){
         indicefotos = 0;
        $('.main, .zonasfoto, .actividad').fadeOut(600).animate({top:700},1);
        $('#capatransparente').fadeOut(600);
        fotoselegidas = $(this).find('strong').attr("class");
        verfotos();
    });*/
    


     $('.flechasimagen li').hover( function(){
        $(this).fadeTo(300,0.6);
            },
            function(){
        $(this).stop(true).fadeTo(300,1);
            });

    


    //efecto para mostrar las flechas y cerrar del visor de fotos
    $('.visorfoto').hover( function(){
        $('.visorfoto ul').fadeTo(300,0.5).fadeIn(300);
            },
            function(){
        $('.visorfoto ul').stop(true).fadeOut(300);
            });
                
                           
                     
    $('.opciones').hover( function(){

        $(this).addClass('realzaopcion','fast');
        
        },
        function() {
        $(this).removeClass('realzaopcion','fast');
        $(this).find('.dropdown-menu').fadeOut(300);
        });
            //realzamos fotografías añadiendo texto cuando pasamos "el raton por encima

       
        
            
        $('.opciones').click(function() {  
       
    //Este trozo de código primero quita la clase añadida en el hover y luego obtiene el nombre de la opcion
       $(this).find('.dropdown-menu').toggle(300);
       $(this).removeClass('realzaopcion');
       var liElegido = $(this).attr('class');
       var opcionElegida = liElegido.substr(9);
       if (opcionElegidaTest === opcionElegida) {return false;}
       opcionElegidaTest = opcionElegida;

        
       
       switch(opcionElegida) {
    case ('home'):
        $('.main, .zonasfoto, .actividad, .zonaalrededores, .mapasitio, .formulario, .consultaprecios, .formularioreservas').fadeOut(600).animate({top:700},1);
        $('.expofoto, .textofotos').hide();
        $('#capatransparente').fadeOut(400);
        $('#nuevatemporada').show();
        break;
    case ('casa'):
        mascara();
        $('.tomateoculto, .pilateoculto').hide();
        $('.lacasa, .casatexto').fadeIn(500);
        $(".main").fadeIn(400).animate({top: alturaheader},400);
        $('#nuevatemporada').hide();
        break;
    case 'fotos':
        mascara();
        if (anchurawindow <= 720) {
            $('.primero, .container').css("display","none");
            $('.mosaico').css("display","block");
        }    
        $(".zonasfoto").fadeIn(400).animate({top:  alturaheader},400);
        $('#nuevatemporada').hide();
        break;
    case 'entretenimiento':
         mascara();
         $('.tomateoculto, .lospilates, .lostomates,.pilateoculto').hide();
        $('.lacasa, .casatexto').fadeIn(500);
        $(".actividad").fadeIn(400).animate({top:  alturaheader},400);
        $('#nuevatemporada').hide();
        break;
    case 'alrededores':
        mascara();
        $('.tomateoculto, .pilateoculto').hide();
        $('.lacasa, .casatexto').fadeIn(500);
        $(".zonaalrededores").fadeIn(400).animate({top:  alturaheader},400);
        $('#nuevatemporada').hide();
        break;
    case 'comollegar':
        mascara();
        $(".mapasitio").fadeIn(400).animate({top:  alturaheader},400);
        $('#nuevatemporada').hide();
        break;
    case 'contacto':
        mascara();
        $(".formulario").fadeIn(400).animate({top:  alturaheader},400);
        $('#nuevatemporada').hide();
        break;
     case 'precios':
        mascara();
        $(".consultaprecios").fadeIn(400).animate({top:  alturaheader},400);
        $('#nuevatemporada').hide();
        break; 
     case 'reservas':
        mascara();
        $(".formularioreservas").fadeIn(400).animate({top:  alturaheader},400);
        $('#nuevatemporada').hide();
        break;      
    default:
         
    }

    

    });  
     
});  