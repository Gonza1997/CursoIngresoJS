function Mostrar()
{
	var numero;
	var nota;
	numero = Math.floor(Math.random() * 10) + 1;

	if(numero>8)
	{
		alert("¡Excelente!");
	}

	else
	{
		if(numero<3)
		{
			alert("Vamos, la próxima se puede.");
		}

		else
		{
			alert("Aprobó.");
			
		}
	}
}