<?php	require_once 'sqlConnection.php';	if(isset($_GET['savealarm']))	{		$gid 	         = $_GET['gid'];		$tipAlarm        = $_GET['atype'];		$responsable1    = $_GET['ares1'];		$responsable2    = $_GET['ares2'];		$responsable3    = $_GET['ares3'];		$fechaAlarma     = $_GET['feal'];		$horaAlarma      = $_GET['hoal'];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->nuevaAlarma($gid, $tipAlarm, $responsable1, $responsable2, $responsable3, $fechaAlarma, $horaAlarma);	}	if(isset($_GET['mostrarcampanas']))	{				$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);			$consultas->MostrarCampanas();	}		if(isset($_GET['detalleAlarmas']))	{				$id=$_GET['detalleAlarmas'];			$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);			$consultas->detalleAlarmas($id);	}		if(isset($_GET['ncamp']) && isset($_GET['clicli']))	{		$ncam = $_GET['ncamp'];		$clicli = $_GET['clicli'];			$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->IngresarCampana($ncam, $clicli);	}	if(isset($_GET['listarGiftcards']))	{		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->CampanasGiftcard();	}		if(isset($_GET['listarGiftcardsCompleta']))	{		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->CampanasGiftcardMostrar();	}	if(isset($_GET['editarGiftcard']))	{		session_start();		$_SESSION["giftcard_editar"]=$_GET['editarGiftcard'];		$_SESSION["giftcard_editar_nombre"]=$_GET['nombre'];	}	if(isset($_GET['editarPerfil']))	{		session_start();		$_SESSION["perfil_editar"]=$_GET['editarPerfil'];		$_SESSION["perfil_editar_nombre"]=$_GET['nombre'];	}	if(isset($_GET['obtenerParaEditar']))	{		session_start();		$id = $_SESSION["giftcard_editar"];		$nombre = $_SESSION["giftcard_editar_nombre"];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->obtenerParaEditar($id);	}		if(isset($_GET['obtenerPerfilEditar']))	{		session_start();		$id = $_SESSION["perfil_editar"];		$nombre = $_SESSION["perfil_editar_nombre"];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->obtenerPerfilEditar($id);	}	if(isset($_GET['listarCampanasSelect']))	{		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->listarCampanasSelect();	}	if(isset($_GET['listarUsuarios']))	{		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->MostrarUsuario();	}	if(isset($_GET['logout']))	{		session_destroy();	}			if(isset($_GET['listarLog']))	{		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->ListarLog();	}		if(isset($_GET['ListarVisualizacion']))	{		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->ListarVisualizacion();	}	if(isset($_GET['idcamp']) && isset($_GET['idcli']))	{		$idcamp = $_GET['idcamp'];		$idcli = $_GET['idcli'];			$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->ModVisionCampana($idcamp, $idcli);	}	if(isset($_GET['id']) && isset($_GET['estado']))	{		$id     = $_GET['id'];		$estado = $_GET['estado'];			$nombre = $_GET['nombre'];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->modificarEstado($id, $estado, $nombre);	}	if(isset($_GET['idid']) && isset($_GET['idtipo']) && isset($_GET['idestado']) && isset($_GET['ncnc']))	{				$idid = $_GET['idid'];		$idtipo = $_GET['idtipo'];		$idestado = $_GET['idestado'];		$ncnc = $_GET['ncnc'];			$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->ModEstadoCampana($idid, $idtipo, $idestado, $ncnc);	}	if(isset($_GET['campid'])){		$campid = $_GET['campid'];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->asigURL($campid);	}	if(isset($_GET['oldpass']) && isset($_GET['newpass']))	{		$oldp = $_GET['oldpass'];		$newp = $_GET['newpass'];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->cambiarPWD($oldp, $newp);	}	if(isset($_GET['nombreuser']))	{		$id = $_GET['nombreuser'];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->conseguirNombre($id);	}	if(isset($_GET['nombre']) && isset($_GET['tipoCliente']) &&	   isset($_GET['compania']) && 	   isset($_GET['Grupo']) && isset($_GET['FechaInicio']) &&	   isset($_GET['HoraInicio']) && isset($_GET['FechaFin']) && 	   isset($_GET['HoraFin'])){		$nombre   = $_GET['nombre'];		$tipo     = $_GET['tipoCliente'];	    $compania = $_GET['compania'];	    $grupo    = $_GET['Grupo'];	    $finicio  = $_GET['FechaInicio'];	    $hinicio  = $_GET['HoraInicio'];	    $ffin     = $_GET['FechaFin']; 	    $hfin     = $_GET['HoraFin'];	    $redir    = $_GET['redir'];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->AgregarGiftCard($nombre, $tipo, $compania,$grupo,									$finicio, $hinicio, $ffin, $hfin,$redir);	}	if(isset($_GET['rut']) && isset($_GET['nombres']) &&	   isset($_GET['correo']) && isset($_GET['perfil']) &&	   isset($_GET['usuario']) && isset($_GET['password'])){	   	$rut      = $_GET['rut'];		$nombre   = $_GET['nombres'];		$correo   = $_GET['correo'];	    $perfil   = $_GET['perfil'];	    $usuario  = $_GET['usuario'];	    $password = $_GET['password'];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->AgregarUsuario($rut,$nombre,$correo,$perfil,$usuario,$password);	}	if(isset($_GET['r']) && isset($_GET['n']) &&	   isset($_GET['c']) && isset($_GET['p']) &&	   isset($_GET['u']) && isset($_GET['pass']) && 	   isset($_GET['editarUser'])){	   	$rut      = $_GET['r'];		$nombre   = $_GET['n'];		$correo   = $_GET['c'];	    $perfil   = $_GET['p'];	    $usuario  = $_GET['u'];	    $password = $_GET['pass'];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->EditarUsuario($rut,$nombre,$correo,$perfil,$usuario,$password);	}	if(isset($_GET['editar']) && isset($_GET['n']) &&	   isset($_GET['t']) && 	   isset($_GET['c']) && isset($_GET['g']) &&	   isset($_GET['fi']) && isset($_GET['hi']) && 	   isset($_GET['ff'])){	   	$id       = $_GET['editar'];		$nombre   = $_GET['n'];		$tipo     = $_GET['t'];	    $compania = $_GET['c'];	    $grupo    = $_GET['g'];	    $finicio  = $_GET['fi'];	    $hinicio  = $_GET['hi'];	    $ffin     = $_GET['ff']; 	    $hfin     = $_GET['hf'];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->EditarGiftCard($id,$nombre, $tipo, $compania,$grupo,									$finicio, $hinicio, $ffin, $hfin);	}	if(isset($_GET['mostrarAlarmas']))	{		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->ListarAlarmz();	}	if(isset($_GET['endofdeal']))	{		$id = $_GET['endofdeal'];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->buscarFFIN($id);	}	if(isset($_GET['endoftime']))	{		$id = $_GET['endoftime'];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->buscarHFIN($id);	}	if(isset($_GET["AlarmasCantidad"])){		$id = $_GET['AlarmasCantidad'];		$consultas= new consultas($sqlHost,$sqlUser,$sqlPass,$sqlBase);		$consultas->AlarmasCantidad($id);	}	class consultas    { 		protected $host;		protected $user;		protected $pass;		protected $database;        public function __construct($h,$u,$p,$d)         {             $this->host=$h;             $this->user=$u;             $this->pass=$p; 			$this->database=$d;        }         public function ListarVisualizacion(){        	$conexion = mysql_connect($this->host, $this->user,$this->pass);			mysql_select_db($this->database, $conexion);			$consulta="SELECT * FROM campanas";			mysql_query("SET NAMES utf8");			$resultado=mysql_query($consulta, $conexion) or die (mysql_error());			if(mysql_num_rows($resultado)>0){				$count = 0;            	while($res= mysql_fetch_array($resultado)){            		$tempID = $res['giftcard_id'];            		echo "<tr>";            		echo '<script> window.idn = '.$count.';</script>';                 	echo '<td><input id="r'.$count.'" type="checkbox" value="'.$tempID.'" /></td>';                 	echo '<td>'.$res["giftcard_nombre"].'</td>';                	echo '<td>'.$res["giftcard_f_inicio"].'</td>';                	echo '<td>'.$res["giftcard_f_fin"].'</td>';                	                	$nomnom = $res["giftcard_nombre"];                	$query1 = "SELECT COUNT(*) AS beep FROM usuarios WHERE campana_id = $tempID AND vencimiento > now() AND fecha_cobro IS NULL";                	$resAct=mysql_query($query1, $conexion) or die (mysql_error());                	if(mysql_num_rows($resAct)>0){                		while($resp1 = mysql_fetch_array($resAct)){                			echo '<td>'.$resp1["beep"].'</td>';                		}                	}                	else {                		echo '<td>0</td>';                	}                	$query2 = "SELECT COUNT(*) AS beep FROM usuarios WHERE campana_id = $tempID AND fecha_cobro IS NOT NULL";                	$resUtil=mysql_query($query2, $conexion) or die (mysql_error());                	if(mysql_num_rows($resUtil)>0){                		while($resp2 = mysql_fetch_array($resUtil)){                			echo '<td>' .$resp2["beep"]. '</td>';                		}                	}                	else {                		echo '<td>0</td>';                	}                	$query3 = "SELECT COUNT(*) AS beep FROM usuarios WHERE campana_id = $tempID AND vencimiento < now() AND fecha_cobro IS NULL";                	$resCaduc=mysql_query($query3, $conexion) or die (mysql_error());                	if(mysql_num_rows($resCaduc)>0){                		while($resp3 = mysql_fetch_array($resCaduc)){                			echo '<td>' .$resp3["beep"]. '</td>';                		}                	}                	else {                		echo '<td>0</td>';                	}                    if ($res["giftcard_estado"]==0)						echo '<td><span id="hh1" class="label label-danger">Activar</span></td>';					else 						echo '<td><span id="hh1" class="label label-success">Desactivar</span></td>';					                    echo '<td><button id="grafx"  onclick="acceder('.$tempID.');" class="btn btn-default" data-toggle="modal" data-target="#modalGrafX">Acceder</button></td>';                    echo '<td><button class="btn btn-default" onclick="descargar('.$tempID.');">Descargar</button></td>';					echo "</tr>";					$count++;                }			}			else{				echo "No existen Campanas";				}        	        }       	}		   	?>