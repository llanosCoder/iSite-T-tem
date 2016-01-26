<?php 
$base="isite_prueba";

function Conectarse() 
{ 
   if (!($link=mysql_connect("i-site.co","isite","isi12345"))) 
   { 
      echo "Error conectando a la base de datos."; 
      exit(); 
   } 
   if (!mysql_select_db("isite_prueba",$link)) 
   { 
      echo "Error seleccionando la base de datos."; 
      exit(); 
   } 
   return $link; 
} 

Conectarse()
?>