function Mostrar()
{ //Sacar número perfecto
	var numero;
	var numeroanterior;
	var numerorecorrido;
	var acumDiv = 0;

	numero = prompt("ingrese su número: ");
	numero = parseInt(numero);

	for(numeroanterior = 1; numerorecorrido<=numero;numeroanterior++)
	{
		for(numerorecorrido = 1; numerorecorrido<=numero; numerorecorrido++)
		{
			if(numero % numerorecorrido == 0)
			{
				acumDiv = acumDiv + numerorecorrido;
			}
		}
	}
			

	
	if(acumDiv == numero)
			{
				console.log(numero+" es perfecto.");
			}
}