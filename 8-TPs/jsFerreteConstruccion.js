/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo
	var ancho
	var largo2
	var ancho2
	var alambre
	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;
	largo = parseInt(largo);
	ancho = parseInt(ancho);
	largo2 = largo * 2;
	ancho2 = ancho * 2;
	alambre = (largo2 + ancho2) * 3;
	alert("Se debe comprar "+alambre+" metros de alambre.")
}
function Circulo () 
{
	var radio;
	var alambre;
	var perimetro3;
	radio = document.getElementById('Radio').value;
	radio = parseInt(radio);
	perimetro3 = (radio * 6.28) * 3;
	perimetro3 = parseInt(perimetro3)
	alert("Se debe comprar "+perimetro3+" metros de alambre.");

}
function Materiales () 
{
	var ancho;
	var ancho2;
	var largo;
	var largo2;
	var area;
	var cemento;
	var cal;
	ancho = document.getElementById('Ancho').value;
	largo = document.getElementById('Largo').value;
	ancho = parseInt(ancho);
	largo = parseInt(largo);
	area = ancho * largo;
	cemento = area * 2;
	cal = area * 3;
	alert("Se debe comprar "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.");
}