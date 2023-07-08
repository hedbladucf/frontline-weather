import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Stack,
  StackDivider,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import { getLocalTime } from "../utils/getLocalTime";
import { getWindDirection } from "../utils/getWindDirection";

const WeatherCard = ({ children }) => (
  <Card bg="blue.900" color="white" mt="3" p="5">
    {children}
  </Card>
);

WeatherCard.propTypes = {
  children: PropTypes.node.isRequired,
};

const WeatherCardContent = ({ info }) => {
  const weather = info.weather[0];

  return (
    <WeatherCard>
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
              <Tooltip label={weather.description}>
                <Image
                  mt="2"
                  h="8"
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt="Weather Icon"
                />
              </Tooltip>
              <Text pt="2">{weather.main}</Text>
            </Box>
          </Box>

          <Box>
            <Heading size="xs" textTransform="uppercase">
              Temperature
            </Heading>
            <Text pt="2">Currently {info.main.temp.toFixed(1)}° F</Text>
            <Text pt="2">Feels like {info.main.feels_like.toFixed(1)}° F</Text>
          </Box>

          <Box>
            <Heading size="xs" textTransform="uppercase">
              Humidity
            </Heading>
            <Text pt="2">{info.main.humidity}%</Text>
          </Box>

          <Box>
            <Heading size="xs" textTransform="uppercase">
              Wind
            </Heading>
            <Text pt="2">{info.wind.speed} mph</Text>
            <Text pt="2">{getWindDirection(info.wind.deg)}</Text>
          </Box>
        </Stack>
      </CardBody>
    </WeatherCard>
  );
};

WeatherCardContent.propTypes = {
  info: PropTypes.object.isRequired,
};

export { WeatherCard, WeatherCardContent };
