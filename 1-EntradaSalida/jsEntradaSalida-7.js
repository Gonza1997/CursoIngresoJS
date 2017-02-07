/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;
	var resultado1;
	resultado1 = parseInt(numero1)+parseInt(numero2);
	alert("El resultado es: "+resultado1);
}

function restar()
{
	var numero1;
	var numero2;
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;
	var resultado2
	resultado2 = parseInt(numero1)-parseInt(numero2);
	alert("El resultado es: "+resultado2)
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;
	var resultado3
	resultado3 = parseInt(numero1)*parseInt(numero2);
	alert("El resultado es: "+resultado3)
}

function dividir()
{
	var numero1;
	var numero2;
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;
	var resultado4
	resultado4 = parseInt(numero1)/parseInt(numero2);
	alert("El resultado es: "+resultado4);
}

