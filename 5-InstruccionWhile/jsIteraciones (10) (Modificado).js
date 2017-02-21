
function Mostrar() /*Iteración hasta que el usuario quiera*/
{	
	var respuesta = "si";
	var nota;
	var sumadorNota = 0;
	var contador = 0;
	var promedioNota;
	var edad;
	var nombre;
	var sexo;
	var edadmasviejo;
	var nombremasviejo;
	var contadormujeresA = 0;

	while(respuesta == "si")
	{
		contador++;
		nota = prompt("Por favor, ingrese su nota.");
		nota = parseInt(nota); //valido la nota

		while(nota < 0 || nota > 10)
		{
			nota = prompt("Por favor, ingrese su nota.");
			nota = parseInt(nota); 
		}	

		edad = prompt("Ingrese su edad.");
		edad = parseInt(edad);
		nombre = prompt("Ingrese su nombre.");
		sexo = prompt("Ingrese su sexo");

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese un sexo válido");
		}

		/*Acá terminó la carga y validación de datos.
		Comenzamos a hacer las operaciones necesarias.*/

		if(contador == 0)
		{
			nombremasviejo = nombre;
			edadmasviejo = edad;
		}

		else
		{
			if(edad > edadmasviejo)
			{
				nombremasviejo = nombre;
				edadmasviejo = edad;
			}
		}
		/* 1 - Cantidad de mujeres aprobadas.
		   2 - Cantidad de hombre mayores a 25 aprobadas.
		   3 - Cantidad de mujeres menores a 20 años.
		   4 - El nombre de la mujer con mejor nota.
		   5 - El nombre del hombre con mejor nota.
		   6 - Promedio de nota de los hombres.
		   7 - Promedio de nota de las muejres.
		   8 - Porcentaje de aprobados vs. porcentaje de desaprobados.
		   9 - El sexo y el nombre de la primer persona que se saque 10.
		*/
		
		if(nota > 3 && sexo == "f")
		{
			contadormujeresA++;			
		}





		sumadorNota = sumadorNota + nota;

		respuesta = prompt("Ingrese 'si' para continuar"); //Es la última línea del While.
	}


	promedioNota = sumadorNota / contador;
	
	document.write("El número de mujeres aprobadas es: "+contadormujeresA);
}