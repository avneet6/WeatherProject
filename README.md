
# PROJECT DESCRIPTION #

 The Weather App is a responsive web application designed to provide real-time weather information for any city worldwide. Leveraging the power of the OpenWeatherMap 
 API, this app fetches and displays current weather conditions, including temperature, weather description, and weather icon, for the city specified by the user. The 
 app is built using modern web development technologies such as HTML, CSS, JavaScript, and Node.js with the Express framework, ensuring a seamless user experience.

# Features #

1. User-Friendly Interface:
   - The app features a clean and intuitive interface, allowing users to easily input the name of the city they want to check the weather for.
   - The form is styled with a modern design, including a gradient background, glassy effect, and smooth hover animations for the button, enhancing the overall user 
     experience.

2. Real-Time Weather Data:
   - Utilizing the OpenWeatherMap API, the app makes HTTP GET requests to fetch real-time weather data for the specified city.
   - The data includes crucial weather information such as temperature (in Celsius), weather description, and an icon representing the current weather conditions.

3. Responsive Design:
   - The app is designed to be fully responsive, ensuring compatibility across various devices and screen sizes.
   - Whether accessed from a desktop, tablet, or mobile device, the app maintains its functionality and aesthetic appeal.

4. Dynamic Content Display:
   - Upon receiving the weather data from the API, the app dynamically updates the HTML content to display the weather information.
   - This includes displaying the temperature, weather description, and an image of the weather icon, providing users with a visual representation of the current 
     weather conditions.

# Technologies Used #

1. HTML: The foundational markup language used to structure the content of the web application.

2. CSS: Used to style the app, including the gradient background, form design, and responsive layout.

3. JavaScript: The programming language used to handle user interactions, make API requests, and dynamically update the HTML content.

4. Node.js: The runtime environment used to execute JavaScript code server-side.

5. Express: The web application framework for Node.jsused to set up the server and handle HTTP requests.

6. Body-Parser: A middleware used to parse incoming request bodies in a middleware before your handlers, available under the req.body property.

7. HTTPS: Used to make secure HTTP GET requests to the OpenWeatherMap API.

# Implementation Details #

1. Setting Up the Server:
   - The app uses Express to set up a server that listens on port 4000.
   - The server handles GET requests to the root URL by sending the index.html file to the client.

2. Handling Form Submissions:
   - The app uses body-parser to parse URL-encoded bodies, enabling it to extract the city name from the form submission. Upon receiving a POST request, the server 
     retrieves the city name and constructs a URL to query the OpenWeatherMap API.

3. Fetching and Displaying Weather Data:
   - The app makes an HTTPS GET request to the OpenWeatherMap API and processes the JSON response.
   -  The weather data is extracted and dynamically displayed on the web page, including the temperature, weather description, and weather icon.
  
# Conclusion #

 The Weather App project is a practical and engaging way to apply web development skills and understand real-world API integration. By combining HTML, CSS, JavaScript, 
 and Node.jswith the Express framework, this project showcases the ability to build a fully functional, responsive web application from scratch. The use of the 
 OpenWeatherMap API enables the app to provide users with real-time, accurate weather information in a visually appealing and user-friendly manner.

# OUTPUT #
   
   ![Image](https://github.com/user-attachments/assets/960d83d9-98a7-4891-9eb5-846eac8701cd)
   ![Image](https://github.com/user-attachments/assets/5ebf0031-3bca-4a7c-8709-fb89c5b0d314)
   
   
   
   
   
   
   
   
   

   


