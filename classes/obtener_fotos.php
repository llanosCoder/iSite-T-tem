<?php
include("conexion.php"); 
	$link=Conectarse();
	mysql_select_db($base, $link);
	$id = $_GET['id'];
	$consultaFoto = mysql_query("SELECT foto FROM foto WHERE site_id=$id");
	mysql_query("SET NAMES utf8"); 
	$datos = array();
	
	while($rowFoto = mysql_fetch_array($consultaFoto)){
		$dato = array();
		$dato['foto'] = utf8_encode($rowFoto['foto']);
		array_push($datos, $dato);
	}


	echo json_encode($datos);
?>