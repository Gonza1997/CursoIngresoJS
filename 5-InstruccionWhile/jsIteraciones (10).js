
function Mostrar() /*Iteración hasta que el usuario quiera*/
{	
	var respuesta = "si";
	var nota;
	var contador = 0;
	var edad;
	var nombre;
	var sexo;
	var edadmasviejo;
	var nombremasviejo;
	var contadormujeresA = 0;
	var contadorhombres25 = 0;
	var contadormujeres20 = 0;
	var contadormujeres = 0;
	var contadorhombres = 0;
	var sumadornotahombres = 0;
	var sumadornotamujeres = 0;
	var porcentajeaprobados;
	var porcentajedesaprobados;
	var contadoraprobados = 0;
	var contadordesaprobados = 0;
	var genero10;
	var contador10 = 0;

	while(respuesta == "si")
	{
		
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

		if(contador == 0)//Cálculo de nombre y edad de persona más vieja,
		{
			nombremasviejo = nombre;
			edadmasviejo = edad;

			if(sexo == "f")//Cálculo de nombre de la mujer y nota más alta de la mujer.
			{
				var nombremujermasalto = nombre;
				var notamujermasalta = nota;
			}
			
			if(sexo == "m")//Cálculo de nombre del hombre y nota más alta del hombre
			{
				var nombrehombremasalto = nombre;
				var notahombremasalto = nota;
			}

			if(nota == 10) //Primer persona que sacó 10 en contador 0.
			{
				var nombrenota10 = nombre;
				
				if(sexo == "f")
				{
					genero10 = "femenino";
				}
				else
				{
					genero10 = "masculino";
				}
				
				contador10++;
			}
		}

		if(contador > 0)
		{
			if(edad > edadmasviejo)//Continuación de cálculo de nombre y edad de la persona más vieja.
			{
				nombremasviejo = nombre;
				edadmasviejo = edad;
			}

			if(sexo == "f")//Continuación cálculo de nombre de la mujer y nota más alta de la mujer.
			{
				if(nota > notamujermasalta)
				{
					nombremujermasalto = nombre;
					notamujermasalta = nota;					
				}

				else
				{
					nombremujermasalto = nombre;
					notamujermasalta = nota;
				}
			}

			if(sexo == "m")//Continuación cálculo de nombre del hombre y nota más alta del hombre.
			{
				if(nota > notahombremasalto)
				{
					notahombremasalto = nota;
					nombrehombremasalto = nombre;
				}

				else
				{
					notahombremasalto = nota;
					nombrehombremasalto = nombre;
				}
			}

			if(nota == 10 && contador10 == 0) //Primer persona que sacó 10 
			{
					var nombrenota10 = nombre;
					if(sexo == "f")
					{
						genero10 = "femenino";
					}
					else
					{
						genero10 = "masculino";
					}
					contador10++;
				
			}

			
		}
				
		if(nota > 3 && sexo == "f") //Cálculo de Cantidad de Mujeres Aprobadas.
		{
			contadormujeresA++;			
		}

		if(edad > 25 && sexo == "m" && nota > 3)//Cálculo de cantidad de hombres mayores a 25 aprobados.
		{
			contadorhombres25++;
		}

		if(edad < 20 && sexo == "f")//Cálculo de cantidad de hombres mayores a 20 aprobados.
		{
			contadormujeres20++;
		}

		if(sexo =="f")//Contador mujeres.
		{
			var notamujeres = nota;
			contadormujeres++;
		}

		if(sexo == "m")//Contador hombres.
		{
			var notahombres = nota;
			contadorhombres++;
		}

		//Promedio de notas de hombres y mujeres.
		sumadornotahombres = (sumadornotahombres + notahombres);
		sumadornotamujeres = (sumadornotamujeres + notamujeres);
		var promedionotahombres = (sumadornotahombres / contadorhombres);
		var promedionotamujeres = (sumadornotamujeres / contadormujeres);

		if(nota > 4)//Contador de aprobados.
		{
			contadoraprobados++;
		}

		else//Contador de desaprobados.
		{
			contadordesaprobados++;
		}

		

		contador++; //Coloco el contador aca para que la cuenta siguiente no de en 0

		porcentajeaprobados = (contadoraprobados * 100) / contador; //Porcentaje de aprobados
		porcentajedesaprobados = (contadordesaprobados * 100) / contador;//Porcentaje de desaprobados



		
		respuesta = prompt("Ingrese 'si' para continuar"); //Es la última línea del While.
	}


	
	document.write("</br>El número de mujeres aprobadas es: "+contadormujeresA);
	document.write("</br>Cantidad de hombres mayores de 25 aprobados: "+contadorhombres25);
	document.write("</br>Cantidad de mujeres menores a 20 años: "+contadormujeres20);
	document.write("</br>Nombre de la mujer con mejor nota: "+nombremujermasalto);
	document.write("</br>Nombre del hombre con mejor nota: "+nombrehombremasalto);
	document.write("</br>Promedio de nota de los hombres: "+promedionotahombres);
	document.write("</br>Porcentaje de aprobados: "+porcentajeaprobados+"%");
	document.write("</br>Porcentaje de desaprobados: "+porcentajedesaprobados+"%");
	document.write("</br>El nombre de la primera persona que sacó 10 es: "+nombrenota10+" y su sexo es "+genero10);
}

/* 		   1 - Cantidad de mujeres aprobadas.
		   2 - Cantidad de hombre mayores a 25 aprobadas.
		   3 - Cantidad de mujeres menores a 20 años.
		   4 - El nombre de la mujer con mejor nota.
		   5 - El nombre del hombre con mejor nota.
		   6 - Promedio de nota de los hombres.
		   7 - Promedio de nota de las mujeres.
		   8 - Porcentaje de aprobados vs. porcentaje de desaprobados.
		   9 - El sexo y el nombre de la primer persona que se saque 10.
		*/
