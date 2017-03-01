function Mostrar()
{
	var contador = 0;
	var contador1 = 0;
	var contador2 = 0;
	var contador3 = 0;
	var contador4 = 0;
	var contador5 = 0;
	var contador6 = 0;
	var contador7 = 0;
	var contador8 = 0;
	var contador9 = 0;
	var contador0 = 0;

	for(  ; contador < 100000 ; contador++)
	{
		numero = Math.floor((Math.random()* 10 ) + 0);
		switch(numero)
		{
			case 1:
				contador1++;
				break;
			case 2:
				contador2++;
				break;
			case 3:
				contador3++;
				break;
			case 4:
				contador4++;
				break;
			case 5:
				contador5++;
				break;
			case 6:
				contador6++;
				break;
			case 7:
				contador7++;
				break;
			case 8:
				contador8++;
				break;
			case 9:
				contador9++;
				break;
			case 0:
				contador0++;
				break;
		}
	}
	
	document.write("</br>El porcentaje de numeros 1 es: "+((contador1*100)/100000)+"%");
	document.write("</br>El porcentaje de numeros 2 es: "+((contador2*100)/100000)+"%");
	document.write("</br>El porcentaje de numeros 3 es: "+((contador3*100)/100000)+"%");
	document.write("</br>El porcentaje de numeros 4 es: "+((contador4*100)/100000)+"%");
	document.write("</br>El porcentaje de numeros 5 es: "+((contador5*100)/100000)+"%");
	document.write("</br>El porcentaje de numeros 6 es: "+((contador6*100)/100000)+"%");
	document.write("</br>El porcentaje de numeros 7 es: "+((contador7*100)/100000)+"%");
	document.write("</br>El porcentaje de numeros 8 es: "+((contador8*100)/100000)+"%");
	document.write("</br>El porcentaje de numeros 9 es: "+((contador9*100)/100000)+"%");
	document.write("</br>El porcentaje de numeros 0 es: "+((contador0*100)/100000)+"%");

	

}//FIN DE LA FUNCIÓN

/* Al generar números random del 0 al 10, 
se debe contar la cantidad de cada una de estas cifras, 
repetir la iteración para lanzar el random 100.000 veces
e informar:
1 - La cantidad de veces que salió el número del 0 al 10 (For de 0 a 100.000, dentro un número random, luego un case por cada número en cada case un contador,)
2 - El porcentaje de veces que salió cada número con respecto al total
*/