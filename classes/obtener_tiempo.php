<?php
	require("gweather/xml2array.php");

	$url = "http://www.google.com/ig/api?weather=lima&hl=es";
	$contents = file_get_contents($url);
	$data = xml2array($contents);

	$weather_info = $data['xml_api_reply']['weather']['forecast_information'];
	$weather_current = $data['xml_api_reply']['weather']['current_conditions'];
	$weather_forecast = $data['xml_api_reply']['weather']['forecast_conditions'];

	echo $weather_current;
?>