<?php
	include("conexion.php"); 
	$link=Conectarse();
	mysql_select_db($base, $link);
	$id = $_POST['id'];
	$consultaCategoriaPrecios = mysql_query("SELECT id, title FROM category_price WHERE site_id=$id");
	//mysql_query("SET NAMES utf8");
	$precios = array();
	while($rowCategoriaPrecios = mysql_fetch_array($consultaCategoriaPrecios)){
		$precio = array();
		$titulo = utf8_encode($rowCategoriaPrecios['title']);
		$precio['titulo_general'] = $titulo;
		$titulo_id = $rowCategoriaPrecios['id'];
		$consultaPrecios = mysql_query("SELECT title, description, price FROM price WHERE category_id=$titulo_id");
		//mysql_query("SET NAMES utf8");
		while($rowPrecios = mysql_fetch_array($consultaPrecios)){
			
			$precio['titulo'] = utf8_encode($rowPrecios['title']);
			$precio['desc'] = utf8_encode($rowPrecios['description']);
			$precio['precio'] = $rowPrecios['price'];	
			array_push($precios, $precio);
		}
		
	}
	echo json_encode($precios);
?>