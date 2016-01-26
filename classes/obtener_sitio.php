<?php
include("conexion.php"); 
	$link=Conectarse();
	mysql_select_db($base, $link);
	$id = $_GET['id'];
	$consultaInfo = mysql_query("SELECT titulo, subtitulo, descripcion, logo, rate FROM site WHERE id=$id");
	mysql_query("SET NAMES utf8"); 
	$datos = array();
	$dato = array();
	$rowInfo = mysql_fetch_array($consultaInfo);
	$dato['id'] = $id;
	$dato['titulo'] = utf8_encode($rowInfo['titulo']);
	$dato['subtitulo'] = utf8_encode($rowInfo['subtitulo']);
	$dato['descripcion'] = utf8_encode($rowInfo['descripcion']);
	$dato['logo'] = $rowInfo['logo'];
	$dato['calificacion'] = $rowInfo['rate'];
	array_push($datos, $dato);
	echo json_encode($datos);
?>