// Internet Explorer
window.onload = function()
{
     document.onselectstart = function()
     {
          return false;
     } 
// Firefox
     document.onmousedown = function()
     {
          return false;
     }
}
var cargado = false;
var mapa_dia = [{"featureType": "landscape","elementType": "labels","stylers": [{"hue": "#00aaff"},{"saturation": -100},{"gamma": 2.15},{"lightness": 12}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"hue": "#00aaff"},{"saturation": -100},{"gamma": 2.15},{"lightness": 12}]},{"featureType": "transit","elementType": "labels","stylers": [{"visibility": "on"},{"saturation": 100},{"gamma": 1},{"hue": "#024f66"}]},{"featureType": "poi","stylers": [{"hue": "#024f66"},{"saturation": -70},{"gamma": 1},{"lightness": 12}]},{"featureType": "landscape.natural","elementType": "geometry","stylers": [{"color": "#d0e3b4"}]},{"featureType": "landscape.natural.terrain","elementType": "geometry","stylers": [{"visibility": "off"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#bde6ab"}]},{"featureType": "water","elementType": "labels","stylers": [{"hue": "#00aaff"},{"saturation": -100},{"gamma": 2.15},{"lightness": 12}]},{"featureType": "road","elementType": "labels.icon","stylers": [{"hue": "#00aaff"},{"saturation": -100},{"gamma": 2.15},{"lightness": 12}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"hue": "#00aaff"},{"saturation": -100},{"gamma": 2.15},{"lightness": 12}]},{"featureType": "road","elementType": "geometry","stylers": [{"hue": "#00aaff"},{"saturation": -100},{"gamma": 2.15},{"lightness": 12}]}];
var mapa_noche = [{"featureType": "all","elementType": "all","stylers": [{"invert_lightness": true},{"saturation": 10},{"lightness": 30},{"gamma": 0.5},{"hue": "#435158"}]}];
if(esNoche()){
    mapa_actual = mapa_noche;
}else{
    mapa_actual = mapa_dia;
}
var mapOptions = {
    center: new google.maps.LatLng(-33.388385, -70.617736),
    zoom: 15,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    panControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: true,
    styles: mapa_actual
};
var map = new google.maps.Map(document.getElementById("mapa"),
    mapOptions);
var desc = "Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos. Eu sit tincidunt incorrupte definitionem, vis mutat affert percipit cu, eirmod consectetuer signiferumque eu per. In usu latine equidem dolores. Quo no falli viris intellegam, ut fugit veritus placerat per. Ius id vidit volumus mandamus, vide veritus democritum te nec, ei eos debet libris consulatu. No mei ferri graeco dicunt, ad cum veri accommodare. Sed at malis omnesque delicata, usu et iusto zzril meliore. Dicunt maiorum eloquentiam cum cu, sit summo dolor essent te. Ne quodsi nusquam legendos has, ea dicit voluptua eloquentiam pro, ad sit quas qualisque. Eos vocibus deserunt quaestio ei. Blandit incorrupte quaerendum in quo, nibh impedit id vis, vel no nullam semper audiam. Ei populo graeci consulatu mei, has ea stet modus phaedrum. Inani oblique ne has, duo et veritus detraxit. Tota ludus oratio ea mel, offendit persequeris ei vim. Eos dicat oratio partem ut, id cum ignota senserit intellegat. Sit inani ubique graecis ad, quando graecis liberavisse et cum, dicit option eruditi at duo. Homero salutatus suscipiantur eum id, tamquam voluptaria expetendis ad sed, nobis feugiat similique usu ex. Eum hinc argumentum te, no sit percipit adversarium, ne qui feugiat persecuti. Odio omnes scripserit ad est, ut vidit lorem maiestatis his, putent mandamus gloriatur ne pro. Oratio iriure rationibus ne his, ad est corrumpit splendide. Ad duo appareat moderatius, ei falli tollit denique eos. Dicant evertitur mei in, ne his deserunt perpetua sententiae, ea sea omnes similique vituperatoribus. Ex mel errem intellegebat comprehensam, vel ad tantas antiopam delicatissimi, tota ferri affert eu nec. Legere expetenda pertinacia ne pro, et pro impetus persius assueverit."; 
var text = '[{ "id":"1", "lat": "-33.388148" , "lng":"-70.619713", "titulo":"Local 1", "categoria":"2", "categoria2":"10"},' +
'{ "id":"2", "lat": "-33.388246" , "lng":"-70.614606", "titulo":"Local 2", "categoria":"2", "categoria2":"10"},' +
'{ "id":"3", "lat": "-33.390441" , "lng":"-70.614338", "titulo":"Local 4", "categoria":"2", "categoria2":"14"},' +
'{ "id":"4", "lat": "-33.389519" , "lng":"-70.621172", "titulo":"Local 3", "categoria":"3", "categoria2":"19"} ]';
/*var info = '[{"id": "0", "titulo":"Gestsol", "descripcion":"Empresa de Gestión Informática de excelencia ubicada en ciudad empresarial.", "foto":"src/banner-gestsol.png"}, '+
'{"id": "1", "titulo":"Local 1", "descripcion":"Restaurant de sushi y comida china de alta calidad.", "foto":"src/izumi-restaurant-sushi.jpg"}, '+ 
'{"id": "2", "titulo":"Local 2", "descripcion":"Completos, churrascos y mucho más en Juanelos.", "foto":"src/domino.jpg"}, '+ 
'{"id": "3", "titulo":"Local 4", "descripcion":"Pub orientada a jóvenes rockeros que gustan de ir a tocatas de bandas emergentes.", "foto":"src/My_Pub.jpg"}, '+
'{"id": "4", "titulo":"Local 3", "descripcion":"Mall Ciudad Empresarial, donde puedes encontrar todo lo que necesitas. Todo.", "foto":"src/mall.jpg"}]';*/
var puntos = [];

function esNoche(){
    var tiempo = new Date();
    var hora = tiempo.getHours();
    var mapa_actual;
    if(hora > 19 || hora < 7){
        return true;
    }else{
        return false;
    }
}

$(document).ready(function(){
    $("#teclado").hide();
    var logoISITE = '', logoPullman = '';
    if(esNoche()){
        logoISITE = 'Logo_isite_noche.png';
        logoPullman = 'logopullman_06.png';
    }else{
        logoISITE = 'Logo_isite.png';
        logoPullman = 'Logo_pullman.png';
    }
    $("#logo3").append('<a href="welcome.html"><img src="src/'+logoISITE+'" alt="i-site logo"/></a>');
    $("#logo4").append('<img src="src/'+logoPullman+'" alt="pullman bus logo"/>');


    var companyLogo = new google.maps.MarkerImage('img/theme/google-marker.png',
        new google.maps.Size(40,57),
        new google.maps.Point(0,0),
        new google.maps.Point(20,50)
        );
    var contentString = 
    '<div id="content-marker">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="firstHeading" class="firstHeading">Contactanos</h3>'+
    '<div id="bodyContent">'+
    '<p>Santiago.<br/> Av. del Valle Norte 945 Of. 3604, Huechuraba.</p>'+
    '</div>'+
    '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    var companyPos = new google.maps.LatLng(-33.387809, -70.618049);
    var companyMarker = new google.maps.Marker({
        position: companyPos,
        map: map,
        id: "0",
        title:"Gestsol"
    });

    /*google.maps.event.addListener(companyMarker, 'click', function() {
        $(".modal-title").html("Gestsol");
        //$(".modal-body").html(datos.descripcion + "<img id='imagen_modal' src='" + datos.foto + "'/>");
        $(".modal-body").html(desc + "<img id='imagen_modal' src='src/banner-gestsol.png'/>");
        $('#myModal').appendTo("body").modal("show");
    });*/

    setTimeout(function(){
        if(!cargado){
            $("#botones").show();

            $(".btnMenu").addClass('magictime slideRightRetourn');
            cargado = true;
            setTimeout(function(){
                $(".btnMenu").removeClass('magictime slideRightRetourn');
            }, 1001);
        }

    }, 3500);

    google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
        if(!cargado){
            setTimeout(function(){
                $("#botones").show();

                $(".btnMenu").addClass('magictime slideRightRetourn');
                cargado = true;
                setTimeout(function(){
                    $(".btnMenu").removeClass('magictime slideRightRetourn');
                }, 1001);
            }, 200);
        }

    });
});

var latitudes = new Array();
var longitudes = new Array();
var indice = new Array();
function desplegarPuntos(categoria){
    $.get("classes/obtener_puntos.php?cat="+categoria, function(data){
        var puntosAgregar = $.parseJSON(data);
        $.each(puntosAgregar, function(i, datos) {
            indice[i] = datos.id;
            latitudes[i] = datos.lat;
            longitudes[i] = datos.lng;
            var myLatlng = new google.maps.LatLng(latitudes[i], longitudes[i]);
            var marker = new google.maps.Marker({
                position: myLatlng,
                id: datos.id,
                title:datos.titulo
            });
            marker.setMap(map);
            puntos.push(marker);
            google.maps.event.addListener(marker, 'click', function() {
                $.get("classes/obtener_sitio.php?id="+datos.id, function(info){
                    var infoSitios = $.parseJSON(info);
                    var modal = "";
                    var titulo;
                    $.each(infoSitios, function(i, datos) {
                        titulo = '<div id="texto_modal"><h1>'+datos.titulo+'</h1>';
                        titulo += '<h3>'+datos.subtitulo+'</h3></div>';
                        //titulo += '<h4><i>Providencia, Santiago</i></h4></div>';
                        titulo += '<div id="stars">';
                        for(var i = 0; i<datos.calificacion;i++){
                            titulo += '<i class="fa fa-star"></i>&nbsp';
                        }
                        var restante = 5 - datos.calificacion;
                        for(var i = 0; i < restante; i++){
                            titulo += '<i class="fa fa-star-o"></i>&nbsp';
                        }
                        titulo += '</div>';
                        if(datos.logo == ""){
                            titulo += '<img class="img-header" src="src/mall_logo.png"/>';
                        }else{
                            titulo += '<img class="img-header" src="src/'+datos.logo+'" />';    
                        }
                        modal += '<ul class="nav nav-pills nav-stacked" id="acciones_modal"><li id="btn_accion_modal" class="active"><a href="#descripcion" data-toggle="tab"><h3>Descripción</h3></a></li>';
                        modal += '<li id="btn_accion_modal"><a href="#servicios" onClick="obtenerServicios('+datos.id+');" data-toggle="tab"><h3>Servicios</h3></a></li>';
                        modal += '<li id="btn_accion_modal"><a href="#promociones" onClick="obtenerPromociones('+datos.id+');" data-toggle="tab"><h3>Promociones</h3></a></li>';
                        modal += '<li id="btn_accion_modal"><a href="#precios" onClick="obtenerPrecios('+datos.id+');" data-toggle="tab"><h3>Precios</h3></a></li>';
                        modal += '<li id="btn_accion_modal" onClick="dibujar_mapa(0, '+datos.id+',\''+datos.titulo+'\', \'TRANSIT\');"><a href="#como_llegar" data-toggle="tab"><h3>Cómo Llegar</h3></a></li>';
                        modal += '</ul>';
                        modal += '<div class="tab-content"><div id="descripcion" class="tab-pane active"><p><i>'+datos.descripcion+'</i></p></div>';
                        modal += '<div id="servicios" class="tab-pane"><div id="servicios_descripcion"></div></div>';
                        modal += '<div id="promociones" class="tab-pane"><div id="lista_promociones"></div></div>';
                        modal += '<div id="precios" class="tab-pane"><div id="precios_container"><div id="lista_precios"></div><div id="lista_precios2"></div></div></div>';
                        modal += '<div id="como_llegar" class="tab-pane"><div id="modos_viaje" class="btn-group">';
                        modal += '<button class="btn btn-default" id="btn-driving" onClick="dibujar_mapa(\'btn-driving\', '+datos.id+',\''+datos.titulo+'\', \'DRIVING\');">Vehículo</button>';
                        //modal += '<button class="btn btn-success pull-right" onClick="dibujar_mapa('+datos.id+',\''+datos.titulo+'\', \'BICYCLING\');">Bicicleta</button><br>';
                        modal += '<button class="btn btn-default" id="btn-transit" onClick="dibujar_mapa(\'btn-transit\', '+datos.id+',\''+datos.titulo+'\', \'TRANSIT\');">Transporte Público</button>';
                        modal += '<button class="btn btn-default" id="btn-walking" onClick="dibujar_mapa(\'btn-walking\', '+datos.id+',\''+datos.titulo+'\', \'WALKING\');">A pie</button>';
                        modal += '</div><div id="mapa_modal"></div></div>';

                    });
                    $("#myModalHeader").html("");
                    $("#myModalHeader").append(titulo);
                    
                    var carrusel = '<div class="carousel-inner" id="carroso">';
                    var i = 0;
                    var tieneFotos;
                    $.get("classes/obtener_fotos.php?id="+datos.id, function(info){
                        var infoSitios = $.parseJSON(info);
                        $.each(infoSitios, function(i, datos) {
                            tieneFotos = true;
                            if(i==0){
                                carrusel += '<div class="item active"><div class="col-md-4"><a href="#" onClick="abrirFoto(\''+datos.foto+'\');" data-gal="prettyPhoto[1]"><img src="src/'+datos.foto+'" alt="Imagen"/></a></div></div>';
                            }else{
                                carrusel += '<div class="item"><div class="col-md-4"><a href="#" onClick="abrirFoto(\''+datos.foto+'\');" data-gal="prettyPhoto[1]"><img src="src/'+datos.foto+'" alt="Imagen"/></a></div></div>';
                            }
                            i++;
                        });
                        carrusel += '</div>';
                        carrusel += '<a class="left carousel-control" href="#myCarousel" data-slide="prev"><i class="fa fa-angle-left fa-5x"></i></a>';
                        carrusel += '<a class="right carousel-control" href="#myCarousel" data-slide="next"><i class="fa fa-angle-right fa-5x"></i></a>';
                    }).done(function() {
                        $('#myCarousel').html("");
                        if(tieneFotos){ 
                            $('#myCarousel').append(carrusel);
                            $('#myCarousel').carousel();

                            $('.carousel .item').each(function(){
                                var next = $(this).next();
                                if (!next.length) {
                                    next = $(this).siblings(':first');
                                }
                                next.children(':first-child').clone().appendTo($(this));

                                if (next.next().length>0) {
                                    next.next().children(':first-child').clone().appendTo($(this));
                                } else {
                                    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
                                }
                            });
                        }
                        $(".modal-body").html(modal);
                        $('#myModal').modal("show");
                    });
                });
            });
        });
    });
    var puntosRemover = $.parseJSON(text);
    $.each(puntosRemover, function(i, datos) {
        var myLatlng = new google.maps.LatLng(datos.lat, datos.lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title:datos.titulo
        });
        for (p in puntos) {
            puntos[p].setMap(null);
        }
    });
}

function abrirFoto(foto){
    $.prettyPhoto.open('src/' + foto,'Title');
}
var map_modal;
function dibujar_mapa(id, i, titulo, mode){
    var index;
    if(id != 0){
        $( "#" + id ).addClass( "btn-seleccionado" );
        switch(id){
            case "btn-walking":
                $("#btn-driving").removeClass( "btn-seleccionado" );
                $("#btn-transit").removeClass( "btn-seleccionado" );
                break;
            case "btn-transit":
                $("#btn-driving").removeClass( "btn-seleccionado" );
                $("#btn-walking").removeClass( "btn-seleccionado" );
                break;
            case "btn-driving":
                $("#btn-transit").removeClass( "btn-seleccionado" );
                $("#btn-walking").removeClass( "btn-seleccionado" );
                break;
        }
    }
    for(var j = 0; j < indice.length; j++){
        if(indice[j] == i){
            index = j;
        }
    }
    setTimeout(function() {
        var mapOptions_modal = {
            center: new google.maps.LatLng(latitudes[index], longitudes[index]),
            zoom: 15,
            zoomControl: false,
            streetViewControl: false,
            panControl: false,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: true};
            var companyPos_modal = new google.maps.LatLng(latitudes[index], longitudes[index]);
            map_modal = new google.maps.Map(document.getElementById("mapa_modal"),mapOptions_modal);
            var companyMarker_modal = new google.maps.Marker({
                position: companyPos_modal,
                map: map_modal,
                title:titulo
            });
            var directionsDisplay = new google.maps.DirectionsRenderer();
            var directionsService = new google.maps.DirectionsService();
            var request = {
                origin: "-33.388385, -70.617736",
                destination: latitudes[index] + ", " + longitudes[index],
                travelMode: google.maps.DirectionsTravelMode[mode],
                unitSystem: google.maps.DirectionsUnitSystem["METRIC"],
                provideRouteAlternatives: true
            };
            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setMap(map_modal);
                    //directionsDisplay.setPanel($("#panel_ruta").get(0));
                    directionsDisplay.setDirections(response);
                } else {
                    alert("No existen rutas entre ambos puntos");
                }
            });
        }, 100);
}

function obtenerPromociones(id){
    $.post("classes/obtener_promociones.php",
    {
        id: id
    },
    function(data, textStatus)
    {
        data = $.parseJSON(data);
        var promociones = "";
        $.each(data, function(i, datos) {
            promociones += '<div class="promocion"><img class="imagen_promocion" src="src/'+datos.imagen+'"/>';
            //promociones += '<div class="promocion_titulo"><h2>'+datos.titulo+'</h2></div>';
            promociones += '<div class="promocion_descripcion"><h3>'+datos.desc+'</div></h3></div>';
        });
        $("#lista_promociones").html("");
        $("#lista_promociones").append(promociones);
    });
}

function obtenerServicios(id){
    $.post("classes/obtener_servicios.php",
    {
        id: id
    },
    function(data, textStatus)
    {
        data = $.parseJSON(data);
        var servicios = "";
        $.each(data, function(i, datos) {
            servicios += '<p><i>'+datos.desc+'</i></p>';
        });
        $("#servicios_descripcion").html("");
        $("#servicios_descripcion").append(servicios);
    });
}

function obtenerPrecios(id){
    $.post("classes/obtener_precios.php",
    {
        id: id
    },
    function(data, textStatus)
    {
        data = $.parseJSON(data);
        var precios = "", precios2 = "";
        var switchDiv = 0;
        var titulo_general = "";
        $.each(data, function(i, datos) {
            
            if(titulo_general != datos.titulo_general){
                if(switchDiv == 0){
                    switchDiv = 1;
                    
                    precios += '<span class="precio_general"><b>'+datos.titulo_general+'</b></span><hr><br>';
                }else{
                    switchDiv = 0;
                    precios2 += '<span class="precio_general"><b>'+datos.titulo_general+'</b></span><hr><br>';    
                }
            }
            titulo_general = datos.titulo_general;
            if(switchDiv == 0){
                precios2 += '<span class="precio_titulo">'+datos.titulo+'<br>';
                precios2 += '<span class="precio_descripcion">'+datos.desc+'<br></span>';
                precios2 += '<span class="precio_precio">'+datos.precio+'</span><br><br>';
            }else{
                precios += '<span class="precio_titulo">'+datos.titulo+'<br>';
                precios += '<span class="precio_descripcion">'+datos.desc+'<br></span>';
                precios += '<span class="precio_precio">'+datos.precio+'</span><br><br>';
                
            }
        });
        $("#lista_precios").html("");
        $("#lista_precios2").html("");
        $("#lista_precios").append(precios);
        $("#lista_precios2").append(precios2);
    });
}