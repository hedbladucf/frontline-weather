/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Input,
  Stack,
  StackDivider,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { getLocalTime } from "../utils/getLocalTime";
import { getWeather } from "../utils/getWeather";

const locationKey = "location";

export const WeatherCard = () => {
  const [weather, setWeather] = useState(undefined);

  const [location, setLocation] = useState(
    localStorage.getItem(locationKey) ?? "Orlando"
  );

  useEffect(() => {
    onSearch();
  }, []);

  const onSearch = async () => {
    const weather = await getWeather(location);

    if (weather.error) {
      console.log(weather.error);
      return;
    }

    setWeather(weather);
    localStorage.setItem(locationKey, location);
  };

  const onInputChanged = (e) => setLocation(e.target.value);

  return (
    <Box>
      <InfoCard>
        <Flex>
          <Input
            value={location}
            fontWeight="bold"
            focusBorderColor="white"
            onChange={onInputChanged}
            placeholder="Enter a location"
            _placeholder={{ color: "inherit" }}
          />

          <Button ml="2" colorScheme="blue" onClick={onSearch}>
            Search Location
          </Button>
        </Flex>
      </InfoCard>

      {weather && <CardContent info={weather} />}
    </Box>
  );
};

const CardContent = ({ info }) => {
  const weather = info.weather[0];

  return (
    <InfoCard>
      <CardHeader>
        <Heading size="lg">
          {info.name}, {info.sys.country}
          <Text fontSize="small" mt="2">
            🗺 ({info.coord.lat}, {info.coord.lon})
          </Text>
          <Text fontSize="small" mt="2">
            📅 {getLocalTime(info.timezone)}
          </Text>
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Weather
            </Heading>
            <Box display="flex" alignItems="center">
              <Image
                mt="2"
                h="8"
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt="Weather Icon"
              />
              <Text pt="2">{weather.main}</Text>
            </Box>
          </Box>

          <Box>
            <Heading size="xs" textTransform="uppercase">
              Humidity
            </Heading>
            <Text pt="2">{info.main.humidity}%</Text>
          </Box>

          <Box>
            <Heading size="xs" textTransform="uppercase">
              Temperature
            </Heading>
            <Text pt="2">Currently {info.main.temp.toFixed(1)}° F</Text>
            <Text pt="2">Feels like {info.main.feels_like.toFixed(1)}° F</Text>
          </Box>
        </Stack>
      </CardBody>
    </InfoCard>
  );
};

CardContent.propTypes = {
  info: PropTypes.object.isRequired,
};

const InfoCard = ({ children }) => (
  <Card bg="blue.800" color="white" mt="3" p="5">
    {children}
  </Card>
);

InfoCard.propTypes = {
  children: PropTypes.node.isRequired,
};
