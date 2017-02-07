/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre = prompt("Ingrese el nombre.");
	document.getElementById('elNombre').value = nombre; //Cuando le pongo la variable al principio le doy valor a la variable, si le pongo al final, le doy el valor de la variable al ID
}

