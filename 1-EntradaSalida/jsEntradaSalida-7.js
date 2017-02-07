/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var resultado1;
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	resultado1 = numero1 + numero2;
	alert("La suma es: "+resultado1+".");
}

function restar()
{
	var numero1;
	var numero2;
	var resultado2;
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	resultado2 = numero1 - numero2;
	alert("La resta es: "+resultado2+".")
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var resultado3;
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	resultado3 = numero1 * numero2;
	alert("El resultado es: "+resultado3+".");
}

function dividir()
{
	var numero1;
	var numero2;
	var resultado4;
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	resultado4 = numero1 / numero2;
	alert("El resultado es: "+resultado4+".");
}

