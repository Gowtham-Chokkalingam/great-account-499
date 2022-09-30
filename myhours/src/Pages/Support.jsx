import {
  Box,
  Button,
  Center,
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
} from "@chakra-ui/react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

import React from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
import SupportForm from "../Components/SupportForm";
const fontSize = { base: "2.2rem", md: "3rem", lg: "3.6rem" };

const Support = () => {
  return (
    <Flex w={"100%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} margin={"auto"} mt={10} gap={20} align="stretch">
      {/* Setction - 1*/}

      <Box textAlign={"left"} w={"80%"}>
        <Text fontWeight={200} fontSize={{ base: "2.5rem", md: "3rem", lg: "4.5rem" }}>
          We're here
        </Text>
        <Text fontWeight={600} color="colr3" fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}>
          We typically respond in less than 24 hours on business days. Contact us via email, live chat or the form below.
        </Text>
      </Box>
      <Flex  alignItems={'center'} w={"80%"} textAlign={"left"} gap={2}>
        <Link src="https://help.myhours.com/en/?_ga=2.25681657.595258858.1664255959-585254566.1664255959"> <Text as='u'  fontSize={{ base: ".8rem", md: "1.2rem", lg: "1.5rem" }}  color="colr3"> Read our help guides</Text></Link>
        <Text  fontSize={{ base: ".8rem", md: "1.2rem", lg: "1.5rem" }}>
          or send us a message to get detailed help.
        </Text>
      </Flex>
       {/* Setction - 2 Vido*/}
       <Box
        display={"flex"}
        alignItems={"center"}
        margin={"auto"}
        width={{ base: 400, sm:600 ,md: 800, lg: 1000 }}
        height={{ base: 200, md: 400, lg: 500 }}
        ratio={1}
      >
        <iframe   width='120%' height="90%" title="naruto" src="https://www.youtube.com/embed/QhBnZ6NPOY0" allowFullScreen />
      </Box>
   {/* Setction - 3 Form*/}
<SupportForm></SupportForm>
   
      <Footer></Footer>

      {/* End*/}
    </Flex>
  );
};

export default Support;
