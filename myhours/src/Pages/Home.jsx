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
import { FaSun, TiTick, FaArrowRight, FaCheck } from "react-icons/fa";

import React from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
const fontSize = { base: "2.2rem", md: "3rem", lg: "3.6rem" };
const Home = () => {
  return (
    <Flex w={"100%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} margin={"auto"} mt={10} gap={20} align="stretch">
      {/* Setction - 1*/}

      <Box textAlign={"Center"} w={"80%"}>
        <Text fontSize={fontSize}>
          <Highlight fontSize={fontSize} query={["Organize", "Track", "Report"]} styles={{ py: "1", fontWeight: "bold", color: "primary" }}>
            Organize projects, Track time and Report your work
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

      <Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1)-p-1080.png"></Image>
      {/* Setction - 3*/}

      <Box>
        <Text fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} color="primary">
          Trusted by more than 100.000 businesses worldwide
        </Text>
      </Box>
      {/* Setction - 3*/}

      <Flex flexWrap={"wrap"} w={"90%"} gap={12} justifyContent={"center"}>
        <Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9399ba39d2583a755_Capterra-4-7.png"></Image>

        <Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9b4eb5ca178cc55df_g2-4-7.png"></Image>

        <Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9487a040f81a5d142_MS-Gold.png"></Image>
      </Flex>
      {/* Setction - 4*/}
      <Flex
        w={"90%"}
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        gap={1}
        justifyContent={"center"}
        alignItems={"center"}
        ml={"auto"}
      >
        <Flex
          gap={4}
          flexDirection={{
            base: "row",
            md: "column",
          }}
          w={{
            base: "90%",
            md: "50%",
          }}
        >
          <Heading color={"gray.600"}>Coordinate your team, projects and tasks</Heading>
          <Text
            marginTop={{
              base: 0,
              md: 10,
            }}
            fontSize={{ base: 10, sm: 15, md: 20 }}
          >
            Get out of your inbox mess: create projects, assign tasks and write-down or attach details. Track project profitability with hourly rates.
            Set up budgets and get reminded when you’re close.
          </Text>
          <Text
            fontSize={{ base: 10, sm: 15, md: 20 }}
            marginTop={{
              base: 0,
              md: 5,
            }}
            color={"gray.600"}
            as="i"
          >
            “Excellent time tracker to manage your tasks! It changed the way I organize myself, I'm more productive since I used it!” - Guadalupe G.,
            Art Director
          </Text>
        </Flex>
        <Box>
          <Image
            ml={"auto"}
            w={{ base: "100%", md: "80%" }}
            src={"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7199052d14ec5e2a6c813_HP-1.png"}
          ></Image>
        </Box>
      </Flex>
      {/* Setction -5 */}
      <Flex
        w={"90%"}
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        gap={1}
        justifyContent={"center"}
        alignItems={"center"}
        m={"auto"}
      >
        <Box>
          <Image
            m={"auto"}
            w={{ base: "100%", md: "80%" }}
            src={"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991bd83c222217cac17_HP-2.png"}
          ></Image>
        </Box>
        <Flex
          gap={4}
          flexDirection={{
            base: "row",
            md: "column",
          }}
          w={{
            base: "90%",
            md: "50%",
          }}
        >
          <Heading color={"gray.600"}>Track your work hours, expenses and more</Heading>
          <Text
            marginTop={{
              base: 0,
              md: 4,
            }}
            fontSize={{ base: 8, sm: 10, md: 15 }}
          >
            With My Hours you can track all your work. Add a detailed description to your time logs and expenses. We know time tracking is a hassle,
            so we’ve designed it to be super fast.
          </Text>
          <Text
            fontSize={{ base: 8, sm: 10, md: 15 }}
            marginTop={{
              base: 0,
              md: 2,
            }}
            color={"gray.600"}
            as="i"
          >
            “A wonderful product. We no longer have to use multiple programs to track time, projects, PTO, etc.” - Katie L., Office Coordinator
          </Text>
        </Flex>
      </Flex>
      {/* Setction - 6*/}
      <Flex
        w={"90%"}
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        gap={1}
        justifyContent={"center"}
        alignItems={"center"}
        ml={"auto"}
      >
        <Flex
          gap={4}
          flexDirection={{
            base: "row",
            md: "column",
          }}
          w={{
            base: "90%",
            md: "50%",
          }}
        >
          <Heading color={"gray.600"}>Create great-looking reports</Heading>
          <Text
            marginTop={{
              base: 0,
              md: 10,
            }}
            fontSize={{ base: 10, sm: 15, md: 20 }}
          >
            Turn your work into dazzling reports with confidence. From Dashboard to more advanced time analytics. No need for extra spreadsheet work,
            even though you can export your data.
          </Text>
          <Text
            fontSize={{ base: 10, sm: 15, md: 20 }}
            marginTop={{
              base: 0,
              md: 5,
            }}
            color={"gray.600"}
            as="i"
          >
            “My Hours is a super easy to use time tracker and great for sending hourly reports to clients for billable work” - Erin A. Business owner
          </Text>
        </Flex>
        <Box>
          <Image
            ml={"auto"}
            w={{ base: "100%", md: "80%" }}
            src={"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991a6df42a49f7e6d5c_HP-3.png"}
          ></Image>
        </Box>
      </Flex>
      {/* Section - 7 */}

      <Box p="1">
        <NavLink to="/howis">
          <Text as="u" display={"flex"} gap={4} alignItems={"center"} fontSize={{ base: 20, md: 30 }} color="blue.500" fontWeight="bold">
            See how My Hours works in detail<FaArrowRight></FaArrowRight>
          </Text>
        </NavLink>
      </Box>
      {/* Section - 8 */}
      <Box textAlign={"center"}>
        <Heading color={"primary"}>A flexible tool for all types of organizations</Heading>
      </Box>
      {/* Section - 9 */}
      <Grid
        w={"90%"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        templateRows={{ base: "repeat(6, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={6}
        textAlign="center"
        alignItems={"center"}
      >
        <GridItem margin={"auto"} w="60%" display={"grid"} gap={5}>
          <Text color={"primary"} fontSize={30}>
            Billing
          </Text>
          <Text color={"primary"} as="b" fontSize={20}>
            We need to bill our clients with flexible hourly rates.
          </Text>
          <Box>
            <Link to={"./howis"}>
              <Text color="blue.500" as="u">
                Here’s how...
              </Text>
            </Link>
          </Box>
        </GridItem>

        <GridItem margin={"auto"} w="60%" display={"grid"} gap={5}>
          <Text color={"primary"} fontSize={30}>
            Profitability
          </Text>
          <Text color={"primary"} as="b" fontSize={20}>
            We would like to calculate the profitability of our projects.
          </Text>
          <Box>
            <Link to={"./howis"}>
              <Text color="blue.500" as="u">
                Here’s how...
              </Text>
            </Link>
          </Box>
        </GridItem>
        <GridItem margin={"auto"} w="60%" display={"grid"} gap={5}>
          <Text color={"primary"} fontSize={30}>
            Time tracking
          </Text>
          <Text color={"primary"} as="b" fontSize={20}>
            We want to track time on projects and tasks.
          </Text>
          <Box>
            <Link to={"./howis"}>
              <Text color="blue.500" as="u">
                Here’s how...
              </Text>
            </Link>
          </Box>
        </GridItem>
        <GridItem margin={"auto"} w="60%" display={"grid"} gap={5}>
          <Text color={"primary"} fontSize={30}>
            Attendance
          </Text>
          <Text color={"primary"} as="b" fontSize={20}>
            We need to track employee attendance/absence and tasks.
          </Text>
          <Box>
            <Link to={"./howis"}>
              <Text color="blue.500" as="u">
                Here’s how...
              </Text>
            </Link>
          </Box>
        </GridItem>

        <GridItem margin={"auto"} w="60%" display={"grid"} gap={5}>
          <Text color={"primary"} fontSize={30}>
            Client reporting
          </Text>
          <Text color={"primary"} noOfLines={3} as="b" fontSize={20}>
            I need to report the time spent to clients or invoice them.
          </Text>
          <Box>
            <Link to={"./howis"}>
              <Text color="blue.500" as="u">
                Here’s how...
              </Text>
            </Link>
          </Box>
        </GridItem>

        <GridItem margin={"auto"} w="60%" display={"grid"} gap={5}>
          <Text color={"primary"} fontSize={30}></Text>
          <Text color={"primary"} as="b" fontSize={20}></Text>
          <Box m={"auto"}>
            <Link to={"./howis"}>
              <Text display={"flex"} gap={2} alignItems={"center"} color="blue.500" fontSize={22} as="u">
                Find more use cases <FaArrowRight></FaArrowRight>
              </Text>
            </Link>
          </Box>
        </GridItem>
      </Grid>
      {/* Section - 10 */}
      <Box textAlign={"center"}>
        <Heading color={"primary"}>My Hours has changed the way our customers work</Heading>
        <Text fontSize={20} mt={10}>
          We’ve helped 250.000+ people track their work since 2002.
        </Text>
        <Text fontSize={20}>Our software does not include employee monitoring and never will.</Text>
      </Box>
      {/* Section - 11 */}
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
      {/* Section - 12 */}
      <Box>
        <Link to={"./howis"}>
          <Text display={"flex"} gap={2} alignItems={"center"} color="blue.500" fontSize={22} as="u">
            {" "}
            Read More Reviews
            <FaArrowRight></FaArrowRight>
          </Text>
        </Link>
      </Box>
      {/* Section -13 */}
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

      {/* Section -14 */}
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

export default Home;
