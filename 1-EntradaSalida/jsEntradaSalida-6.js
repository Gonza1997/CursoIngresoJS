/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1
	numero1 = document.getElementById('numeroUno').value;
	var numero2
	numero2 = document.getElementById('numeroDos').value;
	var resultado;
	resultado = parseInt(numero1)+parseInt(numero2);
	alert("El resultado es: "+resultado);

}

/*Otra forma de hacer:
	var numero1
	var numero2
	var resultado
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;
	numero1 = parseInt(numero1)
	numero2 = parseInt(numero2) Aca convierto el valor en números
	resultado = numero 1 + numero 2 Aca puedo sumar los resultados convertidos en números.
	*/