/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tempf
	var tempc
	tempf = document.getElementById('Temperatura').value;
	tempf = parseInt(tempf);
	tempc = ((tempf - 32) * 5) / 9;
	tempc = parseInt(tempc);
	alert(tempf+"º Fahrenheit son "+tempc+"º centígrados.")
}

function CentigradosFahrenheit () 
{
	var tempc
	var tempf
	tempc = document.getElementById('Temperatura').value;
	tempc = parseInt(tempc);
	tempf = ((tempc * 9) / 5) + 32;
	tempf = parseInt(tempf);
	alert(tempc+"º centígrados son "+tempf+"º Fahrenheit.")
}
