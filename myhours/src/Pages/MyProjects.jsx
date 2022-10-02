import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  HStack,
  Icon,
  Image,
  StackDivider,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FaSun, TiTick, FaArrowRight, FaCheck } from "react-icons/fa";

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
const fontSize = { base: "2.2rem", md: "3rem", lg: "3.6rem" };

const MyProjects = () => {
  const navigate = useNavigate();

  return (
    <Flex w={"100%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} margin={"auto"} mt={10} gap={20} align="stretch">
      <Link  textDecorationLine={'none'} text href="https://app.myhours.com/?&_ga=2.180041252.1675903394.1664717004-585254566.1664255959#/timesheet" isExternal>
        <Button
          onClick={navigate("https://app.myhours.com/?&_ga=2.180041252.1675903394.1664717004-585254566.1664255959#/timesheet")}
          fontSize={"xl"}
          colorScheme="teal"
          bg={"blue.500"}
          h={14}
          w={{ base: "14rem", md: "16rem", lg: "20rem" }}
        >
          Click To Track Your Project
        </Button>
      </Link>
      {/* Setction - 1*/}

      <Box textAlign={"Center"} w={"80%"}>
        <Text fontSize={fontSize}>
          <Highlight fontSize={fontSize} query={["Myhours", "Track", "Trakcking"]} styles={{ py: "1", fontWeight: "bold", color: "primary" }}>
            Welcome to Myhours, Happy Trakcking
          </Highlight>
        </Text>
      </Box>
      <Box w={"70%"} textAlign={"center"}>
        <Text fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} color="primary">
          Coordinate projects and tasks. Track your work hours and create awesome-looking reports for clients. All-in-one free time tracking software.
        </Text>
      </Box>
      <Button fontSize={"xl"} colorScheme="teal" bg={"blue.500"} h={14} w={{ base: "14rem", md: "16rem", lg: "20rem" }}>
        Get Started - It's Free
      </Button>
      {/* Setction - 2*/}

      <Footer></Footer>

      {/* End*/}
    </Flex>
  );
};

export default MyProjects;
