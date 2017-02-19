function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta="si";
	
	while(respuesta == "si")
	{
		numero = prompt("Ingrese un número1.");
		numero = parseInt(numero);

		if(numero > 0)
		{
			positivo = (numero + positivo);
			respuesta = prompt("¿Desea seguir?");
		}

		else
		{
			negativo = (numero * negativo);
			respuesta = prompt("¿Desea seguir?");
		}	
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN