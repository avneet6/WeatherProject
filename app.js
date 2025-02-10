const express = require("express");
const https = require("https");
const bodyParser = require("body-parser"); // Import the body-parser module for parsing request bodies

const app = express();

// Use body-parser to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET request to the root URL
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html"); // Send the index.html file to the client
});

app.post("/", function(req, res) {
    const location = req.body.cityName; // Get the city name from the request body
    const apiKey = "df9fc328cb1f25f3f5c4a61b8811b3ad"; // OpenWeatherMap API key
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey + "&units=metric";

     // Make a GET request to the OpenWeatherMap API
    https.get(url, function(response) {
        console.log(response.statusCode); // Log the response status code

        // Handle the response data
        response.on("data", function(data) {
            const weatherData = JSON.parse(data); // Parse the JSON data
            const temp = weatherData.main.temp; // Extract the temperature
            const weatherDescription = weatherData.weather[0].description; // Extract the weather description
            const icon = weatherData.weather[0].icon; // Extract the weather icon code
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"; // Construct the icon URL

            res.setHeader('Content-Type', 'text/html; charset=utf-8'); // Set the response content type to HTML with UTF-8 encoding
            res.write("<h1>The temperature in " + location + " is " + temp + " °C.</h1>"); // Write the temperature to the response
            res.write("<p>The weather is currently " + weatherDescription + ".</p>"); // Write the weather description to the response
            res.write("<img src=" + imageURL + ">"); // Write the weather icon image to the response
            res.send();
        });
    });
});

// Start the server on port 4000
app.listen(4000, function() {
    console.log("Server is running on port 4000.");
});
