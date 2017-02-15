function Mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 9 inclusive.");

	while(numero > 9 || numero < 0)
	{
		numero = prompt("ingrese un número entre 0 y 9 inclusive.");
	}

	document.getElementById('Numero').value = numero;


}//FIN DE LA FUNCIÓN