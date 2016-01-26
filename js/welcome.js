$(document).ready(function () {
	var celsius, icon;
	$.get("http://api.openweathermap.org/data/2.5/weather?q=Santiago,cl", function(info){
		var kelvin = info.main.temp;
        celsius = Math.round(kelvin - 273.15);
        switch(info.weather[0].main){
        	case "Clear":
        		icon = "src/meteo/meteo-01.png";
        		break;
			case "Snow":
        		icon = "src/meteo/meteo-02.png";
        		break;
        	case "Thunderstorm":
        		icon = "src/meteo/meteo-03.png";
        		break;
        	case "Clouds":
        		icon = "src/meteo/meteo-04.png";
        		break;
        	case "Drizzle":
        		icon = "src/meteo/meteo-05.png";
        		break;	        		
        	case "Rain":
        		icon = "src/meteo/meteo-05.png";
        		break;
        	default:
        		icon = "src/meteo/meteo-01.png";
        		break;
        }

        
	}).done(function(){
		var meses = new Array ("Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic");
		var f = new Date();
		document.getElementById("infolocal").innerHTML = meses[f.getMonth()] + " " + f.getDate() + ", " + f.getFullYear() + "&nbsp&nbsp&nbsp" 
		+ celsius + "° <img class='meteo' src='"+icon+"'/>";	
	});
});