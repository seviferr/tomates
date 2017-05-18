<?php

extract($_POST);

$respuesta="respuesta";



// Server side validation

// Patterns
// $namePattern = '/^[\\s\\p{L}]+$/u';


 
 


function validaPrimernombre($primernombre){
	$patronNombre = '/^[\s\p{L}]+$/u';
	 //Palabra o espacios de más de un caracter, UTF-8
	return preg_match($patronNombre, $primernombre);
	
}

function validaApellido($apellidos){
	$patronApellido = '/^[\s\p{L}]+$/u'; //Palabra o espacios de más de un caracter, UTF-8
	return preg_match($patronApellido, $apellidos);
	
}



function validaCorreo($correo){

	return filter_var($correo, FILTER_VALIDATE_EMAIL) ? 1 : 0;
	
}

function validaTelefono($telefono){
	$patronTelefono = '/^\d{9}$/'; //Cadena numérica de 9 caracteres
	return preg_match($patronTelefono, $telefono);
	
}

/*$array_error = array(validaNombre($primernombre),validaApellido($apellidos),validaCorreo($correo),validaTelefono($telefono));*/


if(validaPrimernombre($primernombre) == 1 && validaApellido($apellidos) == 1 && validaCorreo($correo) == 1 && validaTelefono($telefono) == 1){

	$mensage = "Name: $primernombre \n";
	$mensage .= "Surname: $apellidos \n";
	$mensage .= "Email: $correo \n";
	$mensage .= "Phone: $telefono \n";
	$mensage .= "fechaentrada: $fechainicial \n";
	$mensage .= "fechasalida: $fechafinal \n";
	$mensage .= "numeropersonas: $numeropersonas \n";
	$mensage .= "numerocomidas: $numerocomidas";


	$respuesta = "";

	// send email

	// use wordwrap() if lines are longer than 70 characters
	// $msg = wordwrap($msg,70);
	
	if (mail("juanferrerruiz@yahoo.es","Formulario datos", $mensage)){


		$respuesta = "Gracias por realizar su reserva. Nos pondremos en contacto.";

	}else{

		$respuesta =  "email_error";

	}


}else{
	$respuesta =  "error de validación";
	
}

?><?=$respuesta?>

