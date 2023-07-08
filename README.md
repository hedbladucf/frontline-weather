# Frontline Weeather app

## A demo node/react application that fetches weather by providing a location.

This is a demo app made to showcase as an intro-to-programming example.

### This project needs the following environment variables defined.

Info on environment variables:
- [Client (Vite)](https://vitejs.dev/guide/env-and-mode.html)
- [Server (DotEnv)](https://www.npmjs.com/package/dotenv)

#### Create a .env.local file in /client and define the following:
- VITE_URL=http://localhost:8080

#### Create a .env file in /server and define the following:
- OPENWEATHER_KEY=YOUR_KEY [OpenWeather](https://openweathermap.org/api)
- MAPBOX_KEY=YOUR_KEY [MapBox](https://www.mapbox.com/)
- PORT=8080 (or any other available port)
