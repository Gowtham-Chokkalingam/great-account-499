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
const fontSize = { base: "2.2rem", md: "3rem", lg: "3.6rem" };
const UseCases = () => {
  return (
    <Flex w={"100%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} margin={"auto"} mt={10} gap={20} align="stretch">
      {/* Setction - 1*/}

      <Box textAlign={"Center"} w={"80%"}>
        <Text fontWeight={200} fontSize={{ base: "3.5rem", md: "4rem", lg: "5.5rem" }}>
          Use cases
        </Text>
        <Text fontSize={fontSize}>
          <Highlight
            fontSize={fontSize}
            query={["how", "My", "Hours", "solves", "solves", "&"]}
            styles={{ py: "1", fontWeight: "bold", color: "primary" }}
          >
            & how My Hours solves solves
          </Highlight>
        </Text>
      </Box>
      <Box w={"80%"} textAlign={"center"}>
        <Text fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }} color="colr3">
          From tracking time, to reporting and invoicing your clients, My Hours is there for you the whole time.
        </Text>
      </Box>
      <Button fontSize={"xl"} colorScheme="teal" bg={"blue.500"} h={14} w={{ base: "14rem", md: "16rem", lg: "20rem" }}>
        Get Started - It's Free
      </Button>
      {/* Setction - 2*/}

      <Grid
        w={"90%"}
        p={8}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        templateRows={{ base: "repeat(6, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={20}
        alignItems={"flex-start"}
      >
        <Flex
          boxShadow="dark-lg"
          height={{ base: "100%", md: "100%", lg: "110%" }}
          p={5}
          bg={"blue.200"}
          borderRadius={10}
          flexDirection={{ base: "column", md: "column", lg: "column" }}
        >
          <Image
            m={"auto"}
            width={"50%"}
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fbf86f7f19477d80b3be5ec_Billable%20settings-p-500.png"
          ></Image>
          <Text as="b" textAlign={"left"} fontSize={{ base: "2rem", md: "2.5rem", lg: "2rem" }} color="colr3">
            Project billing
          </Text>
          <Text>Choose the billing method that is fair for your client and represents your actual work.</Text>
        </Flex>

        <Flex
          boxShadow="dark-lg"
          height={{ base: "100%", md: "100%", lg: "90%" }}
          p={5}
          bg={"red.100"}
          borderRadius={10}
          flexDirection={{ base: "column", md: "column", lg: "column" }}
          justifyContent={"center"}
        >
          <Image
            m={"auto"}
            width={"50%"}
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fbf86f7f19477d80b3be5ec_Billable%20settings-p-500.png"
          ></Image>
          <Text as="b" textAlign={"left"} fontSize={{ base: "2rem", md: "2.5rem", lg: "2rem" }} color="colr3">
            Project billing
          </Text>
          <Text>Choose the billing method that is fair for your client and represents your actual work.</Text>
        </Flex>

        <Flex
          boxShadow="dark-lg"
          height={{ base: "100%", md: "100%", lg: "110%" }}
          p={5}
          bg={"green.100"}
          borderRadius={10}
          flexDirection={{ base: "column", md: "column", lg: "column" }}
        >
          <Image
            m={"auto"}
            width={"50%"}
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fbf86f7f19477d80b3be5ec_Billable%20settings-p-500.png"
          ></Image>
          <Text as="b" textAlign={"left"} fontSize={{ base: "2rem", md: "2.5rem", lg: "2rem" }} color="colr3">
            Project billing
          </Text>
          <Text>Choose the billing method that is fair for your client and represents your actual work.</Text>
        </Flex>

        {/* row 2 */}

        <Flex
          boxShadow="dark-lg"
          height={{ base: "100%", md: "100%", lg: "90%" }}
          justifyContent={"center"}
          p={5}
          bg={"red.100"}
          borderRadius={10}
          flexDirection={{ base: "column", md: "column", lg: "column" }}
        >
          <Image
            m={"auto"}
            width={"50%"}
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fbf86f7f19477d80b3be5ec_Billable%20settings-p-500.png"
          ></Image>
          <Text as="b" textAlign={"left"} fontSize={{ base: "2rem", md: "2.5rem", lg: "2rem" }} color="colr3">
            Project billing
          </Text>
          <Text>Choose the billing method that is fair for your client and represents your actual work.</Text>
        </Flex>

        <Flex
          height={{ base: "100%", md: "100%", lg: "110%" }}
          boxShadow="dark-lg"
          p={5}
          bg={"blue.100"}
          borderRadius={10}
          flexDirection={{ base: "column", md: "column", lg: "column" }}
          justifyContent={"center"}
        >
          <Image
            m={"auto"}
            width={"50%"}
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fbf86f7f19477d80b3be5ec_Billable%20settings-p-500.png"
          ></Image>
          <Text as="b" textAlign={"left"} fontSize={{ base: "2rem", md: "2.5rem", lg: "2rem" }} color="colr3">
            Project billing
          </Text>
          <Text>Choose the billing method that is fair for your client and represents your actual work.</Text>
        </Flex>

        <Flex
          boxShadow="dark-lg"
          height={{ base: "100%", md: "100%", lg: "90%" }}
          justifyContent={"center"}
          p={5}
          bg={"red.100"}
          borderRadius={10}
          flexDirection={{ base: "column", md: "column", lg: "column" }}
        >
          <Image
            m={"auto"}
            width={"50%"}
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fbf86f7f19477d80b3be5ec_Billable%20settings-p-500.png"
          ></Image>
          <Text as="b" textAlign={"left"} fontSize={{ base: "2rem", md: "2.5rem", lg: "2rem" }} color="colr3">
            Project billing
          </Text>
          <Text>Choose the billing method that is fair for your client and represents your actual work.</Text>
        </Flex>
      </Grid>

      {/* Setction - 3*/}

      <Box textAlign={"center"}>
        <Heading color={"primary"}>My Hours has changed the way our customers work</Heading>
        <Text fontSize={20} mt={10}>
          We’ve helped 250.000+ people track their work since 2002.
        </Text>
        <Text fontSize={20}>Our software does not include employee monitoring and never will.</Text>
      </Box>
      {/* Section - 4 */}
      <Grid
        w={"90%"}
        justifyContent={"center"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        templateRows={{ base: "repeat(6, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={6}
        textAlign="center"
        alignItems={"center"}
      >
        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5}>
          <Text color={"text"} fontSize={20}>
            "Easy tracking of billable hours across various projects. Makes time tracking for different tasks simple."
          </Text>
          <Heading as="i" fontSize={20}>
            - Paul H., Business Owner
          </Heading>
        </GridItem>
        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Text color={"text"} fontSize={20}>
            "My Hours is great for keeping track of time spent on different projects. It makes completing my mandatory timesheets at the end of the
            week WAY FASTER."
          </Text>
          <Heading as="i" fontSize={20}>
            - Arieh F., CFO
          </Heading>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Text color={"text"} fontSize={20}>
            "Easy to use for my team members who are remote but hourly. My House provides a simple and easy way to record, track and manage activity."
          </Text>
          <Heading as="i" fontSize={20}>
            - Thomas S., Head of Customer Success
          </Heading>
        </GridItem>

        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5}>
          <Text color={"text"} fontSize={20}>
            "My Hours is great for keeping track of time spent on different projects. It makes completing my mandatory timesheets at the end of the
            week WAY FASTER."
          </Text>
          <Heading as="i" fontSize={20}>
            - Michael B., Manager
          </Heading>
        </GridItem>

        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5}>
          <Text color={"text"} fontSize={20}>
            "The software is very easy to set up, and you can start using it right away to track your time, assigning different hourly rates for
            different types of work."
          </Text>
          <Heading as="i" fontSize={20}>
            - Naomi S., Marketing Manager
          </Heading>
        </GridItem>

        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5}>
          <Text color={"text"} fontSize={20}>
            "I really love this time tracking software. It keeps track of all my hours and is really easy to use. I would definitely recommend this
            software. There is nothing that I don't like about this software."
          </Text>
          <Heading as="i" fontSize={20}>
            - Christina C., Paralegal
          </Heading>
        </GridItem>

        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5}>
          <Text color={"text"} fontSize={20}>
            "I've enjoyed using My Hours, and I use it every day. Great tool for tracking my time!"
          </Text>
          <Heading as="i" fontSize={20}>
            - Cody H., Engineer
          </Heading>
        </GridItem>

        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5}>
          <Text color={"text"} fontSize={20}>
            "Simple to use, perfect for the price, genuinely the best hour tracker I've used yet."
          </Text>
          <Heading as="i" fontSize={20}>
            - Leah M., Engineer
          </Heading>
        </GridItem>
        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5}>
          <Text color={"text"} fontSize={20}>
            "This is the easiest-to-use software that I've found in terms of tracking hours and minutes for multiple projects."
          </Text>
          <Heading as="i" fontSize={20}>
            - Michelle W., Virtual Assistant
          </Heading>
        </GridItem>

        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5}>
          <Text color={"text"} fontSize={20}>
            "I love that I can track my hours and use it to generate meaningful reports to measure time spent. It's intuitive, easy-to-use, and highly
            customizable."
          </Text>
          <Heading as="i" fontSize={20}>
            - Kristen B., Bussines Owner
          </Heading>
        </GridItem>
      </Grid>
      {/* Section - 5 */}
      <Box>
        <Link to={"./howis"}>
          <Text display={"flex"} gap={2} alignItems={"center"} color="blue.500" fontSize={22} as="u">
            {" "}
            Read More Reviews
            <FaArrowRight></FaArrowRight>
          </Text>
        </Link>
      </Box>
      {/* Section -6 */}
      <Box textAlign={"center"}>
        <Heading color={"primary"}>Have questions? We're here</Heading>
        <Text fontSize={20} mt={10}>
          It's always nice to have someone to talk to when facing new software. Get in touch and we'll try our best to help you out.
        </Text>
        <HStack justifyContent={"center"} gap={5} mt={8}>
          <Link src="http://localhost:3000/support">
            <Text display={"flex"} gap={2} color={"blue.500"} alignItems={"center"} as="u">
              <FaCheck></FaCheck>EMAIL & lIVE CHAT
            </Text>{" "}
          </Link>
          <Link src="http://localhost:3000/support">
            <Text display={"flex"} gap={2} color={"blue.500"} alignItems={"center"} as="u">
              <FaCheck></FaCheck>TRAINING FOR TEAMS
            </Text>{" "}
          </Link>
          <Link src="http://localhost:3000/support">
            <Text display={"flex"} gap={2} color={"blue.500"} alignItems={"center"} as="u">
              <FaCheck></FaCheck>KNOWLEDGE BASE
            </Text>{" "}
          </Link>
        </HStack>
      </Box>

      {/* Section -7 */}
      <Grid
        w={"100%"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={20}
        textAlign="center"
        alignItems={"center"}
      >
        <GridItem margin={"auto"} w="60%" h="100%" display={"grid"} gap={5} bg="gray.200" borderRadius={10} p={5}>
          <VStack textAlign="left" zIndex={20}>
            <Heading color={"gray.600"} fontSize={30}>
              Waste no more time, jump right in!
            </Heading>

            <Button w={"50%"} marginRight="auto" colorScheme="teal" variant="outline">
              Get Started - It's Free
            </Button>
            <Text color={"gray.600"} fontSize={20}>
              My Hours is Free to use for teams of any size. Pro paid plan comes with additional features like invoicing, admin controls and priority
              support.
            </Text>
          </VStack>
        </GridItem>
        <GridItem margin={"auto"} w="60%" h="100%" display={"grid"} gap={5} bg="blue.200" borderRadius={10} p={5}>
          <VStack textAlign="left" zIndex={20}>
            <Heading color={"gray.600"} fontSize={30}>
              Need more info? Get a product demo.
            </Heading>

            <Button w={"50%"} marginRight="auto" colorScheme="teal" variant="outline">
              Talk to our Team
            </Button>
            <Text color={"gray.600"} fontSize={20}>
              Teams of 6+ are welcome to book a personalized demo to see how My Hours works in detail.
            </Text>
          </VStack>
        </GridItem>
      </Grid>
      <Footer></Footer>

      {/* End*/}
    </Flex>
  );
};

export default UseCases;
