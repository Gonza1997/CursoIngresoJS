function Mostrar()

{
	var edad;
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if(edad>17)
	{
		alert("Usted es un adulto.");
	}

	else
	{
		if(edad<13)
		{
			alert("Usted es un niño.");
		}

		else
		{
			alert("Usted es un adolescente.");
		}
	}

}	
