<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <script src="scripts/main.js"></script>

    <link rel="stylesheet" href="styles/main.css">

    <title>What's The Weather? by Dotun</title>
</head>

<body>
    <div id="wrapper">
        <h1>What's The Weather?</h1>
        
        <section>
            <form id="search-form">
                <input id="search-box" type="text" placeholder="Type a city name" />
                <button id="search-button">GO</button>
            </form>
        </section>

        <section>
            <div id="city">--</div>
            <div id="current-date">--</div>
        </section>

        <section>
            <div id="weather-icon">--</div>
            <div id="current-temp">--</div>
            <div id="current-conditions"></div>
        </section>

        <section>
            <div id="credits">Weather App by <a href="http://code.dotun.me/" target="_blank">Dotun</a></div>
        </section>
    </div><!--wrapper-->
</body>
</html>