function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta="si";
	
	while(respuesta != "no")
	{
		numero = prompt("Ingrese un número1.");
		numero = parseInt(numero);

		while(numero > 0 && respuesta != "no")
		{
			positivo = (numero + positivo);
			respuesta = prompt("¿Desea seguir introduciendo números?");
			numero = prompt("Ingrese un númeroP.");
		}

		while(numero < 0)
		{
			negativo = (negativo * numero);
		}

		
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN