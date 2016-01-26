<?php
	include("conexion.php"); 
	$link=Conectarse();
	mysql_select_db($base, $link);
	$id = $_POST['id'];
	$consultaPromociones = mysql_query("SELECT title, image, description FROM promotion WHERE site_id=$id");
	mysql_query("SET NAMES utf8");
	$promociones = array();
	while($rowPromociones = mysql_fetch_array($consultaPromociones)){
		$promocion = array();
		$promocion['titulo'] = utf8_encode($rowPromociones['title']);
		$promocion['imagen'] = utf8_encode($rowPromociones['image']);
		$promocion['desc'] = utf8_encode($rowPromociones['description']);
		array_push($promociones, $promocion);
	}
	echo json_encode($promociones);
?>