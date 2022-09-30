import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AspectRatio,
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
import Footer from "../Components/Footer";

import { FaSun, TiTick, FaArrowRight, FaCheck } from "react-icons/fa";
const fontSize = { base: "2.2rem", md: "3rem", lg: "3.6rem" };
const HowItWorks = () => {
  return (
    <Flex w={"100%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} margin={"auto"} mt={10} gap={20} align="stretch">
      {/* Setction - 1*/}
      <Box textAlign={"Center"} w={"80%"}>
        <Text fontSize={fontSize}>
          <Highlight fontSize={fontSize} query={["How", ""]} styles={{ py: "1", fontWeight: "bold", color: "primary" }}>
            How it works
          </Highlight>
        </Text>
        <Text as="b" color={"colr2"} fontSize={fontSize}>
          & why you should switch to My Hours
        </Text>
      </Box>
      <Box w={"70%"} textAlign={"center"}>
        <Text fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} color="primary">
          Time tracking was a pain. We fixed it and made time tracking worth the effort. My Hours is easy to use and gets the most out of your data
          with powerful reporting. Teams that use My Hours are more productive, efficient and organized.
        </Text>
      </Box>
      <Button fontSize={"xl"} colorScheme="teal" bg={"blue.500"} h={14} w={{ base: "14rem", md: "16rem", lg: "20rem" }}>
        Get Started - It's Free
      </Button>
      {/* Setction - 2 Vido*/}
      <Box
        display={"flex"}
        alignItems={"center"}
        margin={"auto"}
        W={{ base: 300, md: 600, lg: 900 }}
        height={{ base: 300, md: 600, lg: 700 }}
        ratio={1}
      >
        <iframe width={"1000"} height="90%" title="naruto" src="https://www.youtube.com/embed/QhBnZ6NPOY0" allowFullScreen />
      </Box>
      {/* Setction - 3*/}
      <VStack w={"90%"} m="auto" gap={4} justifyContent={"flex-start"} alignItems={"center"}>
        <Text as="b" fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} color="secondary">
          Organize your work with projects and tasks
        </Text>
        <Text w="50%" fontSize={{ base: ".5rem", md: ".8rem", lg: "1rem" }} color="primary">
          Breaking down your work into projects and tasks is done with a few keystrokes. Prioritize tasks, add details and assign them to your team to
          complete. Set up an estimated budget on a project or task level.
        </Text>
        <Image w="80%" src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7198fa6df4249877e6d5b_HIW-1(1).png"></Image>
      </VStack>
      {/* Setction - 4*/}
      <VStack w={"90%"} m="auto" gap={4} justifyContent={"flex-start"} alignItems={"center"}>
        <Text fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} as="b" color="secondary">
          Set flexible billable rates and manage rate changes
        </Text>
        <Text w="50%" fontSize={{ base: ".5rem", md: ".8rem", lg: "1rem" }} color="primary">
          Every client, project, task and team member can be billed with a custom rate, but with smart defaults. And, when rates change, you decide
          how it applies to your past work.
        </Text>
        <Image w="80%" src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60c3106b6d15b4476d545c47_Project%20billing.png"></Image>
      </VStack>
      >{/* Setction - 5*/}
      <VStack w={"90%"} m="auto" gap={4} justifyContent={"flex-start"} alignItems={"center"}>
        <Text as="b" fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} color="secondary">
          Track your time working with all the details
        </Text>
        <Text w="50%" fontSize={{ base: ".5rem", md: ".8rem", lg: "1rem" }} color="primary">
          Tracking work time is more than a few fields. Add styled notes to your logs, tag with custom keywords, attach files and enter expenses. With
          keyboard shortcuts, you can do it in no-time.
        </Text>
        <Image
          w="80%"
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61693180d0c70441fdcc29cd_Timesheet%20with%20timer-p-1080.png"
        ></Image>
      </VStack>
      {/* Setction - 6*/}
      <VStack w={"90%"} m="auto" gap={4} justifyContent={"flex-start"} alignItems={"center"}>
        <Text as="b" fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} color="secondary">
          Dazzle your clients with custom reports
        </Text>
        <Text w="50%" fontSize={{ base: ".5rem", md: ".8rem", lg: "1rem" }} color="primary">
          No more one-style-fits-all reports. Go beyond filters and set up reports the way you or your clients want them, without having to retreat
          back to Excel.
        </Text>
        <Image w="80%" src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71990c1a06b2e03f1be70_HIW-4(1).png"></Image>
      </VStack>
      {/* Setction - 7*/}
      <VStack w={"90%"} m="auto" gap={4} justifyContent={"flex-start"} alignItems={"center"}>
        <Text as="b" fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} color="secondary">
          Look at the time spent from every angle
        </Text>
        <Text w="50%" fontSize={{ base: ".5rem", md: ".8rem", lg: "1rem" }} color="primary">
          Fancy dashboards are not enough and with My Hours you can calculate your profit, generate real-time pivot tables or download a simple weekly
          timesheet.
        </Text>
        <Image w="80%" src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71990c1a06b2e03f1be70_HIW-4(1).png"></Image>
      </VStack>
      {/* Setction - 8*/}
      <VStack w={"90%"} m="auto" gap={4} justifyContent={"flex-start"} alignItems={"center"}>
        <Text as="b" fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} color="secondary">
          Approve or comment on your team’s time logs
        </Text>
        <Text w="50%" fontSize={{ base: ".5rem", md: ".8rem", lg: "1rem" }} color="primary">
          Going through every timesheet is a hassle. Select a few projects or team members that might need a careful inspection, while other time logs
          do not need explicit approval.
        </Text>
        <Image
          w="80%"
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61692ce83988430ca662abb6_Approve%20timesheets-p-1080.png"
        ></Image>
      </VStack>
      {/* Setction - 9*/}
      <Flex
        w={"90%"}
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        gap={1}
        justifyContent={"flex-start"}
        p={5}
        alignItems={"center"}
      >
        <Box>
          <Image
            w={{ base: "100%", md: "80%" }}
            src={"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6bd377fbe34a0cc7a0f_HIW-7.png"}
          ></Image>
        </Box>
        <Flex
          gap={2}
          justifyContent={"center"}
          flexDirection={{
            base: "row",
            md: "column",
          }}
          w={{
            base: "90%",
            md: "50%",
          }}
        >
          <Heading color={"gray.600"}>Keep clients in the loop with scheduled email reports</Heading>
          <Text
            marginTop={{
              base: 0,
              md: 10,
            }}
            fontSize={{ base: 10, sm: 15, md: 20 }}
          >
            Setting and downloading reports each month takes precious time. Save your report settings and have My Hours send it to you or your clients
            directly every period
          </Text>
        </Flex>
      </Flex>
      {/* Setction - 10*/}
      <Flex
        w={"90%"}
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        gap={1}
        justifyContent={"flex-start"}
        p={5}
        alignItems={"center"}
      >
        <Box>
          <Image
            w={{ base: "100%", md: "80%" }}
            src={"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6d0c755c679d71eda9f_HIW-8.png"}
          ></Image>
        </Box>
        <Flex
          gap={2}
          justifyContent={"center"}
          flexDirection={{
            base: "row",
            md: "column",
          }}
          w={{
            base: "90%",
            md: "50%",
          }}
        >
          <Heading color={"gray.600"}>Create invoices straight from your tracked hours</Heading>
          <Text
            marginTop={{
              base: 0,
              md: 10,
            }}
            fontSize={{ base: 10, sm: 15, md: 20 }}
          >
            No need for an additional tool that handles the invoicing. Calculate the billable amount for each client and generate a numbered invoice
            that can be sent via email straight away.
          </Text>
        </Flex>
      </Flex>
      {/* Setction - 11*/}
      <Flex
        w={"90%"}
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        gap={1}
        justifyContent={"flex-start"}
        p={5}
        alignItems={"center"}
      >
        <Box>
          <Image
            w={{ base: "100%", md: "80%" }}
            src={"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc913df96a46f4b42ee4264_Roles-p-800.png"}
          ></Image>
        </Box>
        <Flex
          gap={2}
          justifyContent={"center"}
          flexDirection={{
            base: "row",
            md: "column",
          }}
          w={{
            base: "90%",
            md: "50%",
          }}
        >
          <Heading color={"gray.600"}>Flexible, but simple access roles</Heading>
          <Text
            marginTop={{
              base: 0,
              md: 10,
            }}
            fontSize={{ base: 10, sm: 15, md: 20 }}
          >
            With a simple 3-role system, you’ll always know who sees what. You can hide costs and billable amounts from anyone, except account
            administrators.
          </Text>
        </Flex>
      </Flex>
      {/* Setction - 12*/}
      <Flex
        w={"90%"}
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        gap={1}
        justifyContent={"flex-start"}
        p={5}
        alignItems={"center"}
      >
        <Box>
          <Image
            w={{ base: "100%", md: "80%" }}
            src={"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png"}
          ></Image>
        </Box>
        <Flex
          gap={2}
          justifyContent={"center"}
          flexDirection={{
            base: "row",
            md: "column",
          }}
          w={{
            base: "90%",
            md: "50%",
          }}
        >
          <Heading color={"gray.600"}>Count your chickens and calculate your costs</Heading>
          <Text
            marginTop={{
              base: 0,
              md: 10,
            }}
            fontSize={{ base: 10, sm: 15, md: 20 }}
          >
            On top of billable rates, teams can add labor costs and expenses. Monitor your project costs with a (monthly) budget and calculate your
            profits or losses.
          </Text>
        </Flex>
      </Flex>
      {/* Setction - 13*/}
      <Flex
        w={"90%"}
        height="800px"
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        gap={5}
        justifyContent={"center"}
        p={5}
        alignItems={"center"}
      >
        <Flex
          gap={2}
          justifyContent={"center"}
          flexDirection={{
            base: "row",
            md: "column",
          }}
          w={{
            base: "80%",
            md: "40%",
          }}
        >
          <Heading color={"gray.600"}>Sync your data with more than a 1000 tools</Heading>
          <Text
            marginTop={{
              base: 0,
              md: 10,
            }}
            fontSize={{ base: 10, sm: 15, md: 20 }}
          >
            Transfer clients, projects and tasks from Quickbooks and other solutions via Zapier. Documented API enables tech-savvy folks to build
            their own integrations.
          </Text>
          <Image
            w={{ base: "60%", md: "80%" }}
            src={"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9145d6e47e935f0570ff3_Integrations-p-500.png"}
          ></Image>
        </Flex>
        <Flex
          gap={2}
          justifyContent={"center"}
          flexDirection={{
            base: "row",
            md: "column",
          }}
          w={{
            base: "80%",
            md: "40%",
          }}
        >
          <Heading color={"gray.600"}>Track time on the go with a mobile app</Heading>
          <Text
            marginTop={{
              base: 0,
              md: 10,
            }}
            fontSize={{ base: 10, sm: 15, md: 20 }}
          >
            Besides tracking time, add new projects, manage tasks and view reports - all through our mobile apps. Both iOS and Android are supported.
          </Text>
          <Image
            w={{ base: "60%", md: "80%" }}
            H={{ base: "60%", md: "50%" }}
            src={"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd73713f912e4498947d1a3_HIW-mobile%20(1)(1)-p-500.png"}
          ></Image>
        </Flex>
      </Flex>
      {/* Section - 14 */}
      <Box p="1" gap={5} display={"flex"} flexDirection={"column"} justifyContent="center" alignItems={"center"}>
        <Image w={100} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4fa86e0322e7deff06f6e_Group%203.png"></Image>
        <Heading>No, you cannot spy on your employees with My Hours</Heading>
        <Text w={"50%"} textAlign="center">
          My Hours does not record your or your employees’ screens. No screenshots, no apps tracked, no employee monitoring. Of course, you are free
          to view work logs that your team members have entered.
        </Text>
        <Text as="u" display={"flex"} gap={4} alignItems={"center"} fontSize={{ base: 20, md: 30 }} color="blue.500" fontWeight="bold">
          See how My Hours works in detail<FaArrowRight></FaArrowRight>
        </Text>
      </Box>
      {/* Section - 15 */}
      <Flex textAlign={"center"} flexDirection={"column"} justifyContent="center" alignItems={"center"} gap={8}>
        <Heading as="u" color={"primary"}>
          Take a look at the complete list of features in My Hours.
        </Heading>
        <Text fontSize={"2rem"}>Or simply try it out: </Text>
        <Button fontSize={"xl"} colorScheme="teal" bg={"blue.500"} h={14} w={{ base: "14rem", md: "16rem", lg: "20rem" }}>
          Get Started - It's Free
        </Button>
      </Flex>
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
      {/* Section -16 */}
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
      <Footer></Footer>
      {/* End*/}
    </Flex>
  );
};

export default HowItWorks;
