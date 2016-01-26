var tiempo_inactividad;
var intervalo = 5;
function ini() {
    tiempo_inactividad = setTimeout('location="index.html"',intervalo * 60 * 1000); 
}
function parar() {
    clearTimeout(tiempo_inactividad);
    tiempo_inactividad = setTimeout('location="index.html"',intervalo * 60 * 1000);
}

$(document).ready(function () {
	  $("#botones").hide();
	  var elementos = document.getElementsByClassName('1stchild');
        for(var i = 0; i < elementos.length; i++){
            $("#" + elementos[i].id).hide();
        }
    obtenerPadres();
    ini();
});

function mostrarTeclado(){
    //$('#wrap').html("");
    //$('#wrap').html("<input type='text' id='keyboard'/>");
    var keyboardModal = '<div id="teclado"><input id="keyboard" type="text"></div>';
    $(".modal-body").html(keyboardModal);
    $('#tecladoModal').modal("show");
    $("#teclado").show();
    $('#keyboard').keyboard();    
    $('#keyboard').focus();
    
}

function obtenerPadres(){
    $.get("classes/obtener_categorias.php?cat='padre'", function(data){
        data = $.parseJSON(data);
        var menu = "";
        $.each(data, function(i, datos) {
            menu += '<img src="src/iconos/'+datos.icono+'" class="btnMenu father" name="'+datos.id+'" onClick="clicar('+datos.id+', '+datos.esPadre+');" alt="'+datos.titulo+'"/>';
        });
        //menu += '<div id="wrap"><img src="src/iconos/bot_categ02.png" class="btnMenu father" name="9" onClick="mostrarTeclado();" alt="Buscar"/></div>';
        menu += '<div id="wrap"><img src="src/iconos/bot_categ02.png" class="btnMenu father" name="9" alt="Buscar"/></div>';
        $("#botones").append(menu);
    });
}

var puntos = new Array();

function clicar(name, esPadre, esHijo){
  //var name = this.name;
  //var id = this.id;
  if(name == 9){
    desplegarTeclado();
  }else{
      $("#botones").removeClass().addClass('magictime slideRight');
      setTimeout(function(){
        if(name == 0){
            $("#botones").html("");
            obtenerPadres();
        }else{
            if(esPadre == "1"){
                $("#botones").html("");
              
                $.get("classes/obtener_categorias.php?cat="+name, function(data){
                    var nom = "volver";
                    var menu = "";
                    data = $.parseJSON(data);
                    $.each(data, function(i, datos) {
                        menu += '<img src="src/iconos/'+datos.icono+'" class="btnMenu son" name="'+datos.id+'"" onClick="clicar('+datos.id+', '+datos.esPadre+');" alt="'+datos.titulo+'"/>';
                        //menu += '<button id="hijo" name="'+datos.id+'"" class="btnMenu father btn btn-info" onClick=\"clicar('+datos.id+', '+datos.esPadre+');\"><h5>'+datos.titulo+'</h5></button>';
                    });
                    menu += '<img src="src/iconos/volver.png" class="btnMenu son" name="Volver" onClick="clicar(0, 0);" alt="Volver"/>';
                    //menu += '<button id="volver" name="volver" class="btnMenu father btn btn-info" onClick=\"clicar(0, 0);\"><i class="fa fa-home"></i></button>';
                    $("#botones").append(menu);
                    
                });
            }else{
                //alert("No tiene sub categorías.");
            }
        }
        desplegarPuntos(name);
        $("#botones").removeClass().addClass('magictime slideRightRetourn');
        }, 1001);
	}
}

