function Mostrar()
{
	var edad;
	var estado;
	edad = document.getElementById('edad').value;
	estado = document.getElementById('estadoCivil').value;

	if(edad > 17 && estado == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
}