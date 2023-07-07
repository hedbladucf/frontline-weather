const axios = require("axios").default;

// Geocodes the provided address and responds with
// an object that contains the location (lat, long)
const geocode = async (address) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${process.env.MAPBOX_KEY}&limit=1`;

  try {
    const res = await axios.get(url);

    const feature = res.data.features[0];
    const center = feature["center"];

    return {
      name: feature["place_name"],
      location: { lat: center[1], lon: center[0] },
    };
  } catch (error) {
    return { error: `Unable to geocode ${address}` };
  }
};

module.exports = geocode;
