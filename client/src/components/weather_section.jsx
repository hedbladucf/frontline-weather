/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getWeather } from "../utils/getWeather";
import { WeatherCard, WeatherCardContent } from "./weather_card";

const locationKey = "location";

export const WeatherSection = () => {
  const [weather, setWeather] = useState(undefined);

  const [location, setLocation] = useState(
    localStorage.getItem(locationKey) ?? "Lake Mary"
  );

  const toast = useToast();

  useEffect(() => {
    onSearch();
  }, []);

  const onSearch = async () => {
    if (location.length < 2) return;
    const weather = await getWeather(location);

    if (weather.error) {
      return toast({
        description: weather.error,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }

    setWeather(weather);
    localStorage.setItem(locationKey, location);
  };

  const onKeyUpHandler = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  }

  const onInputChanged = (e) => setLocation(e.target.value);

  return (
    <Box>
      <WeatherCard>
        <Flex>
          <InputGroup>
            <InputLeftElement pointerEvents="none">🌎</InputLeftElement>
            <Input
              value={location}
              fontWeight="bold"
              focusBorderColor="white"
              onKeyUp={onKeyUpHandler}
              onChange={onInputChanged}
              placeholder="Enter a location"
              _placeholder={{ color: "inherit" }}
            />
          </InputGroup>

          <Button ml="2" colorScheme="blue" onClick={onSearch}>
            Search
          </Button>
        </Flex>
      </WeatherCard>

      <WeatherCardContent info={weather} />
    </Box>
  );
};
