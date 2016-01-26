<?php
	include("conexion.php"); 
	$link=Conectarse();
	mysql_select_db($base, $link);
	$id = $_POST['id'];
	$consultaServicios = mysql_query("SELECT description FROM service WHERE site_id=$id");
	mysql_query("SET NAMES utf8");
	$servicios = array();
	while($rowServicios = mysql_fetch_array($consultaServicios)){
		$servicio = array();
		$servicio['desc'] = utf8_encode($rowServicios['description']);
		array_push($servicios, $servicio);
	}
	echo json_encode($servicios);
?>