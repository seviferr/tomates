(function ($, window, document, undefined) {

	'use strict';

	$(function () {

		var eventos = ['01-6-2017', '05-6-2017', '06-6-2017', '07-6-2017', '08-6-2017', '12-6-2017', '13-6-2017', '14-6-2017','15-6-2017', '19-6-2017', '20-6-2017', '21-6-2017', '22-6-2017', '26-6-2017', '27-6-2017', '28-6-2017','29-6-2017', '03-7-2017', '04-7-2017', '05-7-2017', '06-7-2017','10-7-2017', '11-7-2017', '12-7-2017', '13-7-2017', '17-7-2017', '18-7-2017', '19-7-2017', '20-7-2017','21-7-2017', '22-7-2017', '23-7-2017', '24-7-2017', '25-7-2017', '26-7-2017', '27-7-2017', '28-7-2017','29-7-2017', '30-7-2017', '31-7-2017', '01-8-2017', '02-8-2017','03-8-2017','07-8-2017', '08-8-2017','09-8-2017', '10-8-2017','14-8-2017', '15-8-2017','16-8-2017', '17-8-2017','21-8-2017', '22-8-2017','23-8-2017', '24-8-2017','28-8-2017', '29-8-2017','30-8-2017', '31-8-2017','04-9-2017', '05-9-2017','06-9-2017', '07-9-2017','11-9-2017', '12-9-2017','13-9-2017', '14-9-2017','18-9-2017', '19-9-2017','20-9-2017', '21-9-2017','25-9-2017', '26-9-2017','27-9-2017', '28-9-2017'];
		var fechaElegida = "";

		$.datepicker.setDefaults($.datepicker.regional["es"]);
		$('#ajax-fechainicio').show();
		$('#ajax-fechafin').hide();
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
			minDate: new Date(2017, 6 - 1, 2),//primera fecha seleccionable
			maxDate: new Date(2017, 9 - 1, 25),//última fecha seleccionable
			onSelect: function (date) {

			},
			onClose: function (selectedDate) {

				$('#ajax-fechafin').show();
				$("#ajax-fechafin").datepicker("option", "minDate", selectedDate);
			}
			});/*.datepicker( "show" ).datepicker( "refresh" )*/


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
	});




})(jQuery, window, document);
