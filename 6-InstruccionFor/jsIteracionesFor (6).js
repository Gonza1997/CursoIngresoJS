function Mostrar()
{ //Ejercicio Nº8 del parcial
	var numero;
	var contador = 0;
	var respuesta = true;
	var contadorPar = 0;
	var promedio = 0;
	var sumanumeros = 0;
	var maximo;
	var minimo;
	
	while(respuesta == true )
	{
		numero = prompt("Ingrese un número: ");
		numero = parseInt(numero);

		while(numero < 0)
		{
			numero = prompt("Ingrese un número positivo: ");
			numero = parseInt(numero);
		}
		

		//Finalización de toma de datos.

		if(numero % 2 == 0)
		{
			contadorPar++;
		}

		if(contador == 0)
		{
			maximo = numero;
			minimo = numero;
		}

		else
		{
			if(numero<minimo)
			{
				minimo = numero;
			}
			else
			{
				maximo = numero;
			}
		}

		contador++;


		sumanumeros = sumanumeros + numero;
		respuesta = confirm("¿Desea seguir introduciendo números?");
	}

	promedio = sumanumeros / contador;

	document.write("</br>La cantidad de números par es: "+contadorPar);
	document.write("</br>El promedio de los números es: "+promedio);
	document.write("</br>La suma de los números es: "+sumanumeros);
	document.write("</br>El máximo de los números es: "+maximo);
	document.write("</br>El mínimo de los números es: "+minimo);
}