<?php
	include("conexion.php"); 
	$link=Conectarse();
	mysql_select_db($base, $link);
	$categoria = $_GET['cat'];
	if($categoria == "padre"){
		$consultaCategoria = mysql("SELECT id, nombre, is_parent, icono FROM category WHERE parent_id=0");
		mysql_query("SET NAMES utf8");
	}else{
		$consultaCategoria = mysql_query("SELECT id, nombre, is_parent, icono FROM category WHERE parent_id=$categoria");
		mysql_query("SET NAMES utf8"); 
		$datos = array();
	}
	while ($rowCategoria = mysql_fetch_array($consultaCategoria)) {
			$dato = array();
			$dato['id'] = $rowCategoria['id'];
			$dato['titulo'] = utf8_encode($rowCategoria['nombre']);
			$dato['esPadre'] = $rowCategoria['is_parent'];
			$dato['icono'] = $rowCategoria['icono'];
			array_push($datos, $dato);
		}
	echo json_encode($datos);
?>