/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//Esto es un comentario de una línea.
	/*Este es un comentario extendido*/
	var nombre; //Defino variable
	nombre = "Gonzalo"; //Cargo la variable
	alert("Nombre: "+nombre);//Si se pone comillas, diréctamente pone lo que está en la comilla, si se pone otra variable que no sea la definida anteriormente no funcionará. Se puede agregar un texto en comillas y seguido de la variable, si se quiere dejar un espacio se tiene que dejar dentro de las comillas.
	nombre = prompt ("Gonzalo", "Escribí tú nombre.");//Sobreescribí la variable y se perdió la anterior
	//Las primeras comillas es el mensaje que aparece arriba y las segundas comillas es el texto que aparece predeterminado.
}

