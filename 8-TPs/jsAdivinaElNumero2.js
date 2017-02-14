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
contadorIntentos=0

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
	contadorIntentos = parseInt(contadorIntentos);
	document.getElementById('intentos').value = contadorIntentos;
	if(numero < numerosecreto)
	{
		alert("Falta...");
	}
	else
	{
		if(numero > numerosecreto)
		{
			alert("Te pasaste.");
		}
		else
		{
			alert("¡Usted ganó en tan solo "+contadorIntentos+" intentos!");

			switch(contadorIntentos)
			{
				case 1:
					alert("¡Usted es psíquico!");
					break;
				case 2:
					alert("¡Excelente percepción!");
					break;
				case 3:
					alert("Esto es suerte.");
					break;
				case 4:
					alert()
			}
		}
	}
}