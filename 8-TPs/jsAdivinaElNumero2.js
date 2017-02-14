/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numerosecreto; 
var contadorIntentos;
var numero;

function comenzar()
{
	numerosecreto = Math.floor((Math.random() * 10) + 1);
	numero = document.getElementById('numero').value;
	contadorIntentos = 0;
	document.getElementById('intentos').value = contadorIntentos;
}

function verificar()
{
	contadorIntentos = contadorIntentos + 1;
	document.getElementById('intentos').value = contadorIntentos;
	if(numero < numerosecreto)
	{
		alert("Falta...");
	}
	else
	{
		if(numero > numerosecreto)
	}
}