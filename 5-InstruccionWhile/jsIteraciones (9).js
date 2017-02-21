function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero;
	var maximo;
	var minimo;

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);
				
		if(contador == 0)
		{
			maximo = numero;
			minimo = numero;
		}

		else
		{
			if(numero > maximo)
			{
				maximo = numero;
			}

			if(numero < minimo)
			{
				minimo = numero;
			}
		}

		respuesta = prompt("¿Desea seguir?");	
		contador++;

	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;




}//FIN DE LA FUNCIÓN