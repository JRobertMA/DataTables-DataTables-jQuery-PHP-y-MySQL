$(document).ready(function() {
	$.ajax({
			url: './include/process.php',
			type: 'post',
			data: { tag: 'getData'},
			dataType: 'json',
			success: function (data) {
				if (data.success) {
					$.each(data, function (index, record) {
						if ($.isNumeric(index)) { 
							var row = $("<tr />");
							$("<td />").text(record.Codigo).appendTo(row);
							$("<td />").text(record.Area).appendTo(row);
							$("<td />").text(record.Categoria).appendTo(row);
							$("<td />").text(record.Descripcion_del_bien).appendTo(row);
							$("<td />").text(record.Cantidad).appendTo(row);
							$("<td />").text(record.Marca).appendTo(row);
							$("<td />").text(record.Color).appendTo(row);
							$("<td />").text(record.Material_placa).appendTo(row);
							$("<td />").text(record.Serie).appendTo(row);
							$("<td />").text(record.Estado_fisico).appendTo(row);
							$("<td />").text(record.No_cheque).appendTo(row);
							$("<td />").text(record.Mo_factura).appendTo(row);
							$("<td />").text(record.Proveedor).appendTo(row);
							$("<td />").text(record.Costo_adquisicion).appendTo(row);
							$("<td />").text(record.IME).appendTo(row);
							$("<td />").text(record.Observaciones).appendTo(row);
							$("<td />").text(record.Fecha).appendTo(row);
							row.appendTo("#inventariosec");
						}
					})
				}

				$('#inventariosec').dataTable( { //CONVERTIMOS NUESTRO LISTADO DE LA FORMA DEL JQUERY.DATATABLES- PASAMOS EL ID DE LA TABLA
        "sPaginationType": "full_numbers" //DAMOS FORMATO A LA PAGINACION(NUMEROS)
    } );
			}
		});
})