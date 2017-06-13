var searchBox = "", date = "", currentDate = "", currentTime = "", currentTemp = "", apiKey = "", xhr = "";

window.addEventListener("DOMContentLoaded", main, false);

function getId(id)
{
	return document.getElementById(id);
}

function WeatherData(day, currentTemp, highTemp, lowTemp)
{
	this.day = day;
	this.currentTemp = currentTemp;
	this.highTemp = highTemp;
	this.lowTemp = lowTemp;
}

function getWeatherData(city, key)
{
	var requestURL = "http://api.openweathermap.org/data/2.5/weather?q=";
	requestURL += city;
	requestURL += "&units=imperial&appid=";
	requestURL += key;

	xhr.open("GET", requestURL, true);
	xhr.send();
}

function loadWeatherData()
{
	if(this.readyState === 4 && this.status === 200)
	{
		currentTemp.innerHTML = JSON.parse(this.responseText).main.temp;
	}
}

function runSearch()
{
	
}

//for loaction initialization
function getCoords()
{
	var coords = {};
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(function(pos){
		coords.lat = pos.coords.latitude;
		coords.lng = pos.coords.longitude;
			
		})
	}
	//default to London
	else
	{
		coords.lat = 51.51;
		coords.lng = -0.13;
	}
	return coords;
}

function main()
{
	searchBox = getId("search-box");
	date = new Date();
	currentDate = getId("current-date");
	currentTime = getId("current-time");
	currentTemp = getId("current-temp");
	apiKey = "f16e015e28c48786da3fd525dffe4905";
	xhr = new XMLHttpRequest();

	searchBox.addEventListener("keydown", runSearch, false);
	xhr.addEventListener("readystatechange", loadWeatherData, false);

	console.log(getCoords());
}