var WeatherApp = {
	searchForm: "",
	searchBox: "",
	city: "",
	currentDate: "",
	iconsUrl: "http://openweathermap.org/img/w/",
	weatherIcon: "",
	currentTemp: "",
	currentConditions: "",
	apiKey: "f16e015e28c48786da3fd525dffe4905",
	xhr: ""
}

window.addEventListener("DOMContentLoaded", main, false);

function main()
{
	WeatherApp.searchForm = getId("search-form");
	WeatherApp.searchBox = getId("search-box");
	WeatherApp.city = getId("city");
	WeatherApp.currentDate = getId("current-date");
	WeatherApp.weatherIcon = getId("weather-icon");
	WeatherApp.currentTemp = getId("current-temp");
	WeatherApp.currentConditions = getId("current-conditions");
	WeatherApp.xhr = new XMLHttpRequest();

	WeatherApp.searchForm.addEventListener("submit", runSearch, false);
	WeatherApp.xhr.addEventListener("readystatechange", loadWeatherData, false);

	// initialize with a city
	if(window.localStorage)
	{
		getWeatherData(localStorage.city);
	}
	else
	{
		getWeatherData("London");
	}
}

function getId(id)
{
	return document.getElementById(id);
}

/*function WeatherData(day, currentTemp, highTemp, lowTemp)
{
	this.day = day;
	this.currentTemp = currentTemp;
	this.highTemp = highTemp;
	this.lowTemp = lowTemp;
}*/

// weather data request
function getWeatherData(queryCity)
{
	var requestURL = "http://api.openweathermap.org/data/2.5/weather?q=";
	requestURL += queryCity;
	requestURL += "&units=imperial&appid=";
	requestURL += WeatherApp.apiKey;

	WeatherApp.xhr.open("GET", requestURL, true);
	WeatherApp.xhr.send();
}

// weather data response
function loadWeatherData()
{
	if(this.readyState === 4 && this.status === 200)
	{
		var payload = JSON.parse(this.responseText);

		if(payload.cod === 200)
		{
			WeatherApp.city.innerHTML = payload.name;
			WeatherApp.currentDate.innerHTML = new Date().toDateString();
			WeatherApp.currentTemp.innerHTML = Math.round(payload.main.temp) + "<sup>&deg;F</sup>";

			WeatherApp.weatherIcon.innerHTML = "<img src='" + WeatherApp.iconsUrl + payload.weather[0].icon + ".png' alt='Icon: " + payload.weather[0].main + "' />";

			WeatherApp.currentConditions.innerHTML = payload.weather[0].description;

			if(window.localStorage)
			{
				localStorage.city = payload.name;
			}
		}
		else
		{
			alert(payload.message);
		}
	}
}

function runSearch(e)
{
	e.preventDefault();
	var query = WeatherApp.searchBox.value;
	query = query.replace(/[ ]/gi, "");
	getWeatherData(query);
}

function celToFah(value)
{
	if(parseFloat(value))
	{
		var result = (parseFloat(value) * 9 / 5) + 32;
		WeatherApp.currentTemp.innerHTML = Math.round(result) + "<sup>&deg;F</sup>";
	}
}

function fahToCel(value)
{
	if(parseFloat(value))
	{
		var result = (parseFloat(value) - 32) * 5 / 9;
		WeatherApp.currentTemp.innerHTML = Math.round(result) + "<sup>&deg;F</sup>";
	}
}