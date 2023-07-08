const axios = require("axios").default;

// Returns the current weather forecast for the provided latitude, longitude
const forcast = async (geoCodeRes) => {
  const {
    location: { lat, lon },
  } = geoCodeRes;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_KEY}&units=imperial`;

  try {
    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    return { error: `Unable to obtain weather forecast for ${lat}, ${lon}` };
  }
};

module.exports = forcast;
