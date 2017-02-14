function Mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch(mes)
{
	case "Julio":
	case "Agosto":
		alert("Estamos en invierno, abrigate que hace frío.");
		break;

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert("¡Ya pasamos el frío! ¡Ahora calor!");
		break;

	default:
		alert("¡Falta para el invierno!");
		break;
} 



}//FIN DE LA FUNCIÓN