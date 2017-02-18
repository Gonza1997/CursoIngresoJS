function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	
	while(respuesta != "no" && respuesta == "si")
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		acumulador = (acumulador + numero); 
		contador++;
		respuesta = prompt("¿Desea seguir introduciendo números?");
	}	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN