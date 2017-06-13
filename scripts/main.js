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

function getWeatherData(city)
{
	xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&&appid=f16e015e28c48786da3fd525dffe4905", true);
	xhr.send();
}

function loadWeatherData()
{
	if(this.readyState === 4 && this.status === 200)
	{
		console.log9this.responseText;
	}
}

var date, currentDate, currentTime, currentTemp, apiKey, xhr;

date = new Date();
currentDate = getId("current-date");
currentTime = getId("current-time");
currentTemp = getId("current-temp");
apiKey = "f16e015e28c48786da3fd525dffe4905";
xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", loadWeatherData, false);

//currentDate.innerHTML = date.getDate();
//currentTime.innerHTML = date.getTime();
//currentTemp.innerHTML = "73";