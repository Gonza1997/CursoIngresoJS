/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var lamparas;
	var precio;
	var marca;
	var precio2;
	precio = 35;
	lamparas = document.getElementById('Cantidad').value;
	lamparas = parseInt(lamparas);
	marca = document.getElementById('Marca').value;

	if(lamparas > 5)
	{
		precio2 = (lamparas * precio) * 0.50;
		document.getElementById('precioDescuento').value = precio2;
	}

	else
	{
		if(marca == "ArgentinaLuz")
		{
			switch(lamparas)
			{
				case 5:
					precio2 = (lamparas * precio) * 0.60;
					document.getElementById('precioDescuento').value = precio2;
					break;
				case 4:
					precio2 = (lamparas * precio) * 0.75;
					document.getElementById('precioDescuento').value = precio2;
					break;
				case 3:
					precio2 = (lamparas * precio) * 0.85;
					document.getElementById('precioDescuento').value = precio2;
					break;
				default:
					precio2 = (lamparas * precio);
					document.getElementById('precioDescuento').value = precio2;
					break;
			}
		}
		else
		{
			if(marca == "FelipeLamparas")
			{
				switch(lamparas)
				{
					case 5:
						precio2 = (lamparas* precio) * 0.70;
						document.getElementById('precioDescuento').value = precio2;
						break;
					case 4:
						precio2 = (lamparas * precio) * 0.75;
						document.getElementById('precioDescuento').value = precio2;
						break;
					case 3:
						precio2 = (lamparas * precio) * 0.90;
						document.getElementById('precioDescuento').value = precio2;
						break;
					default:
						precio2 = (lamparas * precio);
						document.getElementById('precioDescuento').value = precio2;
						break;
				}
			}
			else
			{
				switch(lamparas)
				{
					case 5:
						precio2 = (lamparas * precio) * 0.70;
						document.getElementById('precioDescuento').value = precio2;
						break;
					case 4:
						precio2 = (lamparas * precio) * 0.80;
						document.getElementById('precioDescuento').value = precio2;
						break;
					case 3:
						precio2 = (lamparas * precio) * 0.95;
						document.getElementById('precioDescuento').value = precio2;
						break;
					default:
						precio2 = (lamparas * precio);
						document.getElementById('precioDescuento').value = precio2;
						break;
				}
			}
		}
	}

	if(precio2 > 119)
	{
		var precioiva = (precio2 * 0.10);
		precio2 = (precio2 + precioiva);
		document.getElementById('precioDescuento').value = precio2;
		alert("Usted pagó "+precioiva+" de IIBB, Siendo "+precio2+" el impuesto que se pagó.");

	}
}

