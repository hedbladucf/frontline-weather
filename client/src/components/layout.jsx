import { Box, Center, Image, Flex, Link, Text } from "@chakra-ui/react";
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
    display='flex'
    flexDir='column'
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
  <Box h='24'>
    <Flex alignItems='center'>
      <Image boxSize="85px" src={getSVG()} alt="Weather image" />
      <Text as="b" fontSize="4xl">
        Frontline Weather App
      </Text>
    </Flex>
  </Box>
);

const Footer = () => (
  <Center mt="10">
    <Text fontSize="lg" fontWeight='bold'>
      Built with ❤ using{" "}
    </Text>
    <Link href="https://react.dev/" isExternal>
      <Image h="6" ml="2" src={reactSvg} alt="React svg" />
    </Link>
  </Center>
);

export { Body, Header, Footer };
