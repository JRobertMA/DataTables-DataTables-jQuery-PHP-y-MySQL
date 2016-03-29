<?php
	if (isset($_POST['tag'])) {
		try {
			$conn = require_once 'connect.php';

			$sql = "SELECT * FROM bienes";
			$result = $conn->prepare($sql) or die ($sql);

			if (!$result->execute()) return false;

			if ($result->rowCount() > 0) {
				$json = array();
				while ($row = $result->fetch()) {
					$json[] = array(
						'Codigo' => $row['Codigo'],
						'Area' =>$row['Area'],
						'Categoria' => $row['Categoria'],
						'Descripcion_del_bien' => $row['Descripcion_del_bien'],
						'Cantidad' => $row['Cantidad'],
						'Marca' => $row['Marca'],
						'Color' => $row['Color'],
						'Material_placa' => $row['Material_placa'],
						'Serie' => $row['Serie'],
						'Estado_fisico' => $row['Estado_fisico'],
						'No_cheque' => $row['No_cheque'],
						'No_factura' => $row['No_factura'],
						'Proveedor' => $row['Proveedor'],
						'Costo_adquisicion' => $row['Costo_adquisicion'],
						'IME' => $row['IME'],
						'Observaciones' => $row['Observaciones'],
						'Fecha' => $row['Fecha']
					);
				}

				$json['success'] = true;
				echo json_encode($json);
			}
		} catch (PDOException $e) {
			echo 'Error: '. $e->getMessage();
		}
	}

?>