<?php

extract($_POST);

$response="response";



// Server side validation

// Patterns
// $namePattern = '/^[\\s\\p{L}]+$/u';






function validateName($name){
	$namePattern = '/^[\s\p{L}]+$/u'; //Palabra o espacios de más de un caracter, UTF-8
	return preg_match($namePattern, $name);
}

function validateSurname($surname){
	$surnamePattern = '/^[\s\p{L}]+$/u'; //Palabra o espacios de más de un caracter, UTF-8
	return preg_match($surnamePattern, $surname);
}



function validateEmail($email){

	return filter_var($email, FILTER_VALIDATE_EMAIL) ? 1 : 0;
}

function validatePhone($phone){
	$phonePattern = '/^\d{9}$/'; //Cadena numérica de 9 caracteres
	return preg_match($phonePattern, $phone);
}

$error_array = array(validateName($name),validateSurname($surname),validateEmail($email),validatePhone($phone));


if(validateName($name) == 1 && validateSurname($surname) == 1 && validateEmail($email) == 1 && validatePhone($phone) == 1){

	$msg = "Name: $name \n";
	$msg .= "Surname: $surname \n";
	$msg .= "Email: $email \n";
	$msg .= "Phone: $phone \n";
	$msg .= "Text: $text";



	$response = "";

	// send email

	// use wordwrap() if lines are longer than 70 characters
	// $msg = wordwrap($msg,70);
	
	if (mail("juanferrerruiz@yahoo.es","Formulario datos", $msg)){

		$response = "OK";

	}else{

		$response =  "email_error";

	}


}else{
	$response =  "validation_error";
	
}

?><?=$response?>

