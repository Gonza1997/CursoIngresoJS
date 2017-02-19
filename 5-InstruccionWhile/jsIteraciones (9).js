function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero;
	var maximo = 0;
	var minimo = 0;

	while(respuesta!='no')
	{
		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);
		respuesta = prompt("¿Desea seguir?");	
		contador++;

		if(numero > maximo)
		{
			maximo = numero;
		}

		else
		{
			minimo = numero;
		}

	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;




}//FIN DE LA FUNCIÓN