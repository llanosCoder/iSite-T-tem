<?php
	include("conexion.php"); 
	$link=Conectarse();
	mysql_select_db($base, $link);
	$categoria = $_GET['cat'];
	$consultaTag = mysql_query("SELECT site_id as sid FROM tag WHERE tag_id =$categoria");
	mysql_query("SET NAMES utf8"); 
	$datos = array();
	while($rowTag = mysql_fetch_array($consultaTag)){
		$siteId = $rowTag['sid'];
		$consultaSitio = mysql_query("SELECT id, titulo, latitud, longitud FROM site WHERE id=$siteId");
		while ($rowSitio = mysql_fetch_array($consultaSitio)) {
		$dato = array();
		$dato['id'] = $rowSitio['id'];
		$dato['titulo'] = utf8_encode($rowSitio['titulo']);
		$lat = str_replace('.', '', $rowSitio['latitud']);
		$lng = str_replace('.', '', $rowSitio['longitud']);
		if($lat[0] == "-"){
			$lat2 = substr($lat, 0, 3) . '.' . substr($lat, 3);
			$lng2 = substr($lng, 0, 3) . '.' . substr($lng, 3);
		}else{
			$lat2 = substr($lat, 0, 2) . '.' . substr($lat, 2);
			$lng2 = substr($lng, 0, 2) . '.' . substr($lng, 2);
		}
		$dato['lat'] = $lat2;
		$dato['lng'] = $lng2;
		array_push($datos, $dato);
	}
	}
	
	echo json_encode($datos);
?>