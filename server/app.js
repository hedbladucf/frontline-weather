const express = require("express");
const cors = require("cors");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Configure env variables
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Enable CORS
app.use(cors());

// Define the /forcast GET route
app.get("/forecast", async (req, res) => {
  // Obtain address from query params
  const address = req.query.address;

  if (!address) {
    // If no address was provided, respond with error
    return res.json({ error: "Must provide an address" });
  }

  // Geocode the address the user provided
  const geoCoded = await geocode(address);

  // If an error is sent back from the server,
  // forward the error to the client.
  if (geoCoded.error) {
    return res.json({ error: geoCoded.error });
  }

  // Obtain weather based on found geocoded data
  const weather = await forecast(geoCoded);

  // If an error occured, forward to client
  if (weather.error) {
    return res.json({ error: weather.error });
  }

  // Send weather to client
  res.json(weather);
});

// For all other paths, respond with not found
app.get("*", (_, res) => {
  res.json({ error: "Route not found" });
});

// Listen at designated port
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
