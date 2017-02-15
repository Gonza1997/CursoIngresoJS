function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
		while(contador < 5)
	{
		contador = contador + 1;
		numero = prompt("Ingrese un número: ");
		numero = parseInt(numero);
		while(numero < -10 || numero > 10)
		{
			numero = prompt("Error, reingrese");
			numero = parseInt(numero);
		}
		acumulador = (acumulador + numero);
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN