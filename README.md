# weather-app

## Deployed application
Hosted on Vercel, website link [https://weather-app-neon-mu-27.vercel.app/](https://weather-app-neon-mu-27.vercel.app/)

## Dependencies
For setting up dependencies in the frontend (React, React Redux, ...):
- In the terminal, change directory to `weather-app` folder
- Run `npm install`

## Running the Solution
To run application 
- Run `npm run start` for development
- Run `npm run build` for build

## LocalStorage
- In the requirements of the task, it is given that use local storage to store previulsy searched locatios.
- It is not implemented due to heavy weather data of each location.

## Requirements

1. Framework: The application should be built using `React`.
2. API Integration: Use a free weather API (like OpenWeatherMap) to fetch weather data.
3. User Interface: The application should have an input field to enter a city name and a submit button.
4. Display: On submission, display the current weather information of the selected city, including temperature, humidity, and weather conditions (sunny, cloudy, etc.).
5. Storage: Use local storage to remember the last searched city and its weather information, displaying it when the user revisits the app.
6. Responsiveness: The application should be responsive and provide a good layout on both mobile and desktop screens.
7. Error Handling: Include basic error handling for scenarios like invalid city names or API failures.

## Bonus

- Add icons or images representing the current weather condition.
- Implement a loading state while the weather data is being fetched.