function Mostrar()
{
	var edad;
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if(edad<18)
	{

		if(edad>12)

		{
			alert("Usted es adolescente.");
		}
	}

}

/*Otra forma de hacerlo:
{
	if(edad<18 && edad>12) "&&" es el "Y" lógico, es como decir "Si la edad es menor a 18 Y mayor a 12"
		{
		alert("Adolescente.");
		}
}
*/