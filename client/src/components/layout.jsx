import { Box, Center, Image, Link, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

import reactSvg from "../assets/react.svg";
import cloudySvg from "../assets/cloudy.svg";
import cloudyNightSvg from "../assets/cloudy_night.svg";

const Body = ({ children }) => (
  <Box
    p={10}
    w="100%"
    minH="100vh"
    color="white"
    bgGradient="linear(to-b, blue.900, blue.200)"
  >
    {children}
  </Box>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

const getSVG = () => {
  const hour = new Date().getHours();
  const isDaytime = hour > 5 && hour < 17;
  return isDaytime ? cloudySvg : cloudyNightSvg;
};

const Header = () => (
  <Box h="28">
    <Center h="full">
      <Image boxSize="80px" src={getSVG()} alt="Weather image" />
      <Text as="b" fontSize="4xl">
        Frontline Weather App
      </Text>
    </Center>
  </Box>
);

const Footer = () => (
  <Center mt="10">
    <Text fontSize="lg" as="ins">
      Built with love using{" "}
    </Text>
    <Link href="https://react.dev/" isExternal>
      <Image h="6" ml="1" src={reactSvg} alt="React svg" />
    </Link>
  </Center>
);

export { Body, Header, Footer };
