function Mostrar()
{
	var edad;
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if(edad<18 && edad>12)
	{

	}

	else
	{
		alert("Usted no es adolescente.");
	}
}
