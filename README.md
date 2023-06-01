# Weather Forecast App

This repository contains the code for a Weather Forecast App built using React. The app allows users to view the weather forecast for a specific city after logging in with their GitHub account.

## Getting Started

To run the code locally, follow these steps:

1. Clone the repository to your local machine.

   ```shell
   git clone https://github.com/your-username/weather-forecast-app.git
   ```

2. Navigate to the project directory.

   ```shell
   cd weather-forecast-app
   ```

3. Install the dependencies.

   ```shell
   npm install
   ```

4. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```plaintext
   REACT_APP_AUTH0_DOMAIN=<your-auth0-domain>
   REACT_APP_AUTH0_CLIENT_ID=<your-auth0-client-id>
   REACT_APP_WEATHER_API_KEY=<your-weather-api-key>
   ```

   Replace `your-auth0-domain` with your Auth0 domain, `your-auth0-client-id` with your Auth0 client ID, and `your-weather-api-key` with your OpenWeatherMap API key.

5. Start the development server.

   ```shell
   npm start
   ```

6. Open the app in your browser.

   The app should be running at [http://localhost:3000](http://localhost:3000).

## Dependencies

The app has the following dependencies:

- React
- React Router DOM
- Auth0 React
- Axios

You can find the complete list of dependencies in the `package.json` file.

## Notes

- The app uses Auth0 for authentication. Users need to log in with their GitHub account to access the app.
- After logging in, users can enter a city name to view the weather forecast for that city.
- The weather forecast data is fetched from the OpenWeatherMap API using the provided API key.
- The app includes error handling for invalid city names and network errors.
- The app displays a loading spinner while fetching weather data.
- The cloud icon in the header changes based on the weather description. Here's how it works:
  - If the weather description is "cloudy", the cloud icon is displayed.
  - If the weather description is "stormy", the lightning bolt icon is displayed.
  - If the weather description is "Rain", the cloud with rain icon is displayed.
  - If the weather description is "Clear", the sunny icon is displayed.
  - For any other weather description, the default cloud icon is displayed.
