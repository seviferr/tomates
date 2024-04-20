(function ($, window, document, undefined) {

	'use strict';



	/* JS Routing */
	function navigateTo(){
		var hash = location.hash.replace( /^#/, '' ) || 'inicio';
		$('body').attr('data-section', hash);
		$('.navbar-collapse.in').collapse('hide');
		$('body').animate({scrollTop:0}, 0);

	
	}



	$('a').click(function(e){

		var href = $(this).attr('href');
		if (href.indexOf('#') !== -1 && href !== '#' && href!=='#myCarousel') {
			
			location.hash = href;

		};

	});


	$(window).on('hashchange', navigateTo);
	

	navigateTo();







	/* Datepicker */
	var eventos = ['01-6-2017', '05-6-2017', '06-6-2017', '07-6-2017', '08-6-2017', '12-6-2017', '13-6-2017', '14-6-2017','15-6-2017', '19-6-2017', '20-6-2017', '21-6-2017', '22-6-2017', '26-6-2017', '27-6-2017', '28-6-2017','29-6-2017', '03-7-2017', '04-7-2017', '05-7-2017', '06-7-2017','10-7-2017', '11-7-2017', '12-7-2017', '13-7-2017', '17-7-2017', '18-7-2017', '19-7-2017', '20-7-2017','21-7-2017', '22-7-2017', '23-7-2017', '24-7-2017', '25-7-2017', '26-7-2017', '27-7-2017', '28-7-2017','29-7-2017', '30-7-2017', '31-7-2017', '01-8-2017', '02-8-2017','03-8-2017','07-8-2017', '08-8-2017','09-8-2017', '10-8-2017','14-8-2017', '15-8-2017','16-8-2017', '17-8-2017','21-8-2017', '22-8-2017','23-8-2017', '24-8-2017','28-8-2017', '29-8-2017','30-8-2017', '31-8-2017','04-9-2017', '05-9-2017','06-9-2017', '07-9-2017','11-9-2017', '12-9-2017','13-9-2017', '14-9-2017','18-9-2017', '19-9-2017','20-9-2017', '21-9-2017','25-9-2017', '26-9-2017','27-9-2017', '28-9-2017'];
	var fechaElegida = "";

	$.datepicker.setDefaults($.datepicker.regional["es"]);
	$('#ajax-fechainicio').show();
	$("#ajax-fechainicio").datepicker({
		beforeShowDay: function(date) {
			var current = $.datepicker.formatDate('dd-m-yy', date);
			return jQuery.inArray(current, eventos) == -1 ? [true, ''] : [false, 'ui-state-hover', 'ui-state-highlight'];
		},

		firstDay: 1,
		numberOfMonths: 2,
		showButtonPanel: true,
		duration: "slow",
		changeMonth: true,
		minDate: new Date(2017, 6 - 1, 2),
		maxDate: new Date(2017, 9 - 1, 25),
		onSelect: function (date) {

		},
		onClose: function (selectedDate) {

			$('#ajax-fechafin').prop('disabled', false);
			$("#ajax-fechafin").datepicker("option", "minDate", selectedDate);
		}
	});

	$("#ajax-fechafin").datepicker({
		beforeShowDay: function(date) {
			var current = $.datepicker.formatDate('dd-m-yy', date);
			return jQuery.inArray(current, eventos) == -1 ? [true, ''] : [false, 'ui-state-hover', 'ui-state-highlight'];
		},  
		firstDay: 1,
		numberOfMonths: 2,
		showButtonPanel: true,
		duration: "slow",
		changeMonth: true,
		minDate: new Date(2017, 6 - 1, 2),
		maxDate: new Date(2017, 9 - 1, 25),
		onSelect: function (selectedDate) {

		},
		onClose: function (selectedDate) {
			$("#ajax-fechainicio").datepicker("option", "maxDate", selectedDate);

		}
	});


	/* Setting up blueimp galleries */

	var galleryData = {

		actividades : [

		{
			title: 'Relajación',
			href: 'assets/img/gallery/actividades/actividades0.jpg'
		},

		{
			title: 'Saludo al sol',
			href: 'assets/img/gallery/actividades/actividades1.jpg'
		},

		{
			title: 'Melocotón en conserva',
			href: 'assets/img/gallery/actividades/actividades2.jpg'
		},



		{
			title: 'Con la profe detrás',
			href: 'assets/img/gallery/actividades/actividades3.jpg'
		},

		{
			title: 'Preparando la fruta',
			href: 'assets/img/gallery/actividades/actividades4.jpg'
		},

		{
			title: 'Preparación de la conserva',
			href: 'assets/img/gallery/actividades/actividades5.jpg'
		},

		{
			title: 'Frutas recogidas',
			href: 'assets/img/gallery/actividades/actividades6.jpg'
		},

		{
			title: 'Sabado: practicando en el agua',
			href: 'assets/img/gallery/actividades/actividades7.jpg'
		},
		],

		entorno : [
		{
			title: 'Arrozales de Calasparra',
			href: 'assets/img/gallery/entorno/entorno0.jpg'
		},

		{
			title: 'Comienza la primavera',
			href: 'assets/img/gallery/entorno/entorno1.jpg'
		},

		{
			title: 'Frutales desde la casa',
			href: 'assets/img/gallery/entorno/entorno2.jpg'
		},

		{
			title: 'El valle de Burete',
			href: 'assets/img/gallery/entorno/entorno3.jpg'
		},

		{
			title: 'Mochón de Cieza',
			href: 'assets/img/gallery/entorno/entorno4.jpg'
		},

		{
			title: 'Camino hacia la casa',
			href: 'assets/img/gallery/entorno/entorno5.jpg'
		},

		{
			title: 'Cehegín',
			href: 'assets/img/gallery/entorno/entorno6.jpg'
		},

		{
			title: 'Vistas del valle',
			href: 'assets/img/gallery/entorno/entorno7.jpg'
		}


		],

		habitaciones : [

		{
			title: 'Dormitorio suite',
			href: 'assets/img/gallery/habitaciones/habitaciones0.jpg'
		},

		{
			title: 'Cuarto bodega aceite',
			href: 'assets/img/gallery/habitaciones/habitaciones1.jpg'
		},

		{
			title: 'Dormitorio primera planta',
			href: 'assets/img/gallery/habitaciones/habitaciones2.jpg'
		},

		{
			title: 'Dormitorio primera planta',
			href: 'assets/img/gallery/habitaciones/habitaciones3.jpg'
		},

		{
			title: 'Chimenea del salon',
			href: 'assets/img/gallery/habitaciones/habitaciones4.jpg'
		},

		{
			title: 'Dormitorio principal primera planta',
			href: 'assets/img/gallery/habitaciones/habitaciones5.jpg'
		},

		{
			title: 'Baño primera planta',
			href: 'assets/img/gallery/habitaciones/habitaciones6.jpg'
		},

		{
			title: 'Cocina',
			href: 'assets/img/gallery/habitaciones/habitaciones7.jpg'
		},



		],

		patio : [
		'assets/img/gallery/patio/patio0.jpg',
		'assets/img/gallery/patio/patio1.jpg',
		'assets/img/gallery/patio/patio2.jpg',
		'assets/img/gallery/patio/patio3.jpg',
		'assets/img/gallery/patio/patio4.jpg',
		'assets/img/gallery/patio/patio5.jpg',
		'assets/img/gallery/patio/patio6.jpg',
		'assets/img/gallery/patio/patio7.jpg'

		]

	}



	$('*[data-gallery]').click(function(){
		console.log($(this).attr('data-gallery'));
		blueimp.Gallery(galleryData[$(this).attr('data-gallery')]);

	})





	/* Ajax forms */

	function spawnAlert(text, type, icon, lifeSpan){

		var text = text || '';
		var type = type || 'info';
		var icon = icon || 'info-sign';
		var lifeSpan = lifeSpan || 2000;

		var alert = '<div class="alert alert-'+type+' fade in" alert-dismissible><i class="glyphicon glyphicon-'+icon+'"></i> '+text+'</div>';

		$('#alert-wrap').append(alert);


		setTimeout(function(){

			$('#alert-wrap .alert').alert('close');


		}, lifeSpan);

	}

	/** Integration with google forms
	$('.js-form-google').on('submit', function(e){
		console.log("asdsadadsda");
		e.preventDefault();
		const form = $(this);
		const urlParams = form.serialize();
		const formType = form.attr("data-form-type");
		console.log({formType});
		const config = {
			reservations: {
				message: "¡Enviado!",
				formId: "1FAIpQLSc7vfG9BVg8SRBGfKUyCVCzqEWznAZH11yzh1Ddviqi8mnCeA",
			},
			contact: {
				message: "¡Enviado!",
				formId: "1FAIpQLSdNcWM0jJnoygZzNmbIiRIBMWBFVBpjgIae8Szx66HYk7veAw",
			},
		};
		const url = `https://docs.google.com/forms/d/e/${config[formType].formId}/formResponse?submit=pp_url&${urlParams}`
		$('#loading-overlay').fadeIn();
		fetch(url, {
		  method: "GET",
		  mode: "no-cors",
		  header: {
			'Content-Type': 'application/json'
		  },
		  data: form.serialize()
		})
		.then(data => {
			spawnAlert('Gracias por realizar su reserva. Nos pondremos en contacto.', 'success', 'ok');
		})
		.catch(err => {
			spawnAlert('Error en el envío del formulario', 'danger', 'remove');	
		})
		.finally(() => {
			$('#loading-overlay').fadeOut();
		})
	
	});
	*/

	$('[data-netlify-ajax=true]').on('submit', function(event){
		event.preventDefault();

		const myForm = $(this);
		const formData = new FormData(myForm);
		const formType = myForm.attr("data-form-type");
		const config = {
			reservations: {
				message: "Gracias por realizar su reserva. Nos pondremos en contacto.",
			},
			contact: {
				message: "Gracias por su consulta. Nos pondremos en contacto.",
			},
		};

		$('#loading-overlay').fadeIn();		
		fetch("/", {
		  method: "POST",
		  headers: { "Content-Type": "application/x-www-form-urlencoded" },
		  body: new URLSearchParams(formData).toString(),
		})
		  .then(() => {
			spawnAlert(config[formType].message, 'success', 'ok');
		  })
		  .catch((error) => {
			spawnAlert('Error en el envío del formulario', 'danger', 'remove');	
		  })
		  .finally(() => {
			$('#loading-overlay').fadeOut();
		  })
	})

	
	/** 
	$('form').on('submit', function(){

		var form = $(this);
		var action = form.attr('action');
		var data = form.serialize();
		var info = form.find('.ajax-info');

		// form.addClass('loading');
		// info.html('<img src="assets/img/loading.gif" />');

		//$('#loading-overlay').fadeIn();
		
		console.log({data, action});

		$.ajax({

			type: "POST",
			url:  action,
			data: data,
			header: {
				contentType: "application/x-www-form-urlencoded"
			}

		}).success(function(response) {

			$('#loading-overlay').fadeOut();
			console.log(response);


			if(response === "ok-contacto") { 

                spawnAlert('¡Enviado!', 'success', 'ok');


            } else if(response === "ok-reserva") {

                spawnAlert('Gracias por realizar su reserva. Nos pondremos en contacto.', 'success', 'ok');


            } 

            else if(response === "validation_error") {

                spawnAlert('Error de validación', 'danger', 'remove');

            } else{

                spawnAlert('Error en el envío del formulario', 'danger', 'remove');	

            }

        }); 

});

 */		 

$('input[type=tel]').on('change invalid', function() {
	var textfield = $(this).get(0);


	textfield.setCustomValidity('');

	if (!textfield.validity.valid) {
		textfield.setCustomValidity('Por favor, introduce un número de 9 cifras');
	}
});



})(jQuery, window, document);
