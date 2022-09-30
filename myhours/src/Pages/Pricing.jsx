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
  ListItem,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Footer from "../Components/Footer";

import { FaSun, TiTick, FaArrowRight, FaCheck, FaInfoCircle } from "react-icons/fa";
import FaqAccordion from "../Components/FaqAccordion";
const fontSize = { base: "2.2rem", md: "3rem", lg: "3.6rem" };
const Pricing = () => {
  return (
    <Flex w={"100%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} margin={"auto"} mt={10} gap={20} align="stretch">
      {/* Setction - 1*/}
      <Box textAlign={"Center"} w={"80%"}>
        <Text fontSize={fontSize}>
          <Highlight fontSize={fontSize} query={["How", ""]} styles={{ py: "1", fontWeight: "bold", color: "primary" }}>
            Pick your plan
          </Highlight>
        </Text>
        <Text as="b" color={"colr3"} fontSize={{ base: "1rem", md: "2rem" }}>
          Track time on projects with your team.
        </Text>
      </Box>
      {/* Setction - 2 */}
      <Flex
        w={"90%"}
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        gap={10}
        justifyContent={"flex-start"}
        p={5}
        alignItems={"center"}
      >
        <Flex
          gap={2}
          justifyContent={"center"}
          flexDirection={"column"}
          w={{
            base: "90%",
            md: "50%",
          }}
        >
          <Heading color={"secondary"}>Free</Heading>
          <Text
            fontWeight={600}
            marginTop={{
              base: 0,
              md: 10,
            }}
            fontSize={{ base: 10, sm: 15, md: 20 }}
          >
            For individuals or teams just getting started with time tracking.
          </Text>
          <Heading fontSize={"5rem"}>$0</Heading>
          <UnorderedList>
            <ListItem>Unlimited team members & projects</ListItem>
            <ListItem>Track time on projects & tasks</ListItem>
            <ListItem>Set billable rates</ListItem>
            <ListItem>Generate detailed reports</ListItem>
          </UnorderedList>
          <Button fontSize={"xl"} variant="outline" colorScheme="teal" h={14} w={{ base: "24rem", md: "28rem", lg: "30rem" }}>
            Select
          </Button>
        </Flex>

        <Flex
          gap={2}
          justifyContent={"center"}
          flexDirection={"column"}
          w={{
            base: "90%",
            md: "50%",
          }}
        >
          <Heading color={"secondary"}>Pro</Heading>
          <Text
            fontWeight={600}
            marginTop={{
              base: 0,
              md: 10,
            }}
            fontSize={{ base: 10, sm: 15, md: 20 }}
          >
            For freelancers and teams actively managing their time.
          </Text>
          <HStack>
            <Heading fontSize={"5rem"}>$6</Heading>
            <Box w={"65%"}>
              <Text>- per active team member, per month billed annually</Text>
              <Text>- $7 billed monthly</Text>
            </Box>
          </HStack>
          <UnorderedList>
            <ListItem>
              <Text as="i">Everything in free PLUS</Text>
            </ListItem>
            <ListItem>Priority support</ListItem>
            <ListItem>Generate client invoices</ListItem>
            <ListItem>Add & edit logs on behalf of your team</ListItem>
            <ListItem>Approval workflow with Audit log</ListItem>
            <ListItem>Extra features…</ListItem>
          </UnorderedList>
          <Button fontSize={"xl"} variant="solid" colorScheme="teal" h={14} w={{ base: "24rem", md: "28rem", lg: "30rem" }}>
            14 day free trail
          </Button>
        </Flex>
      </Flex>
      {/* Setction - 3 Table 1*/}
      <TableContainer w="90%">
        <Table textAlign={"left"}>
          <Thead textAlign={"left"}>
            <Tr>
              <Th fontSize={"1.5rem"}>Feature</Th>
              <Th fontSize={"1.5rem"}>Free</Th>
              <Th fontSize={"1.5rem"}>Pro</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td as="b">Track</Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Timer or add manually <FaInfoCircle></FaInfoCircle>
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Timesheet - weekly tracking<FaInfoCircle></FaInfoCircle>
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Timer - daily tracking <FaInfoCircle></FaInfoCircle>
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Favorites<FaInfoCircle></FaInfoCircle>
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Expenses<FaInfoCircle></FaInfoCircle>
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Detailed description and attachments<FaInfoCircle></FaInfoCircle>
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Daily tracking reminder (mobile app)<FaInfoCircle></FaInfoCircle>
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Bulk edit or delete logs<FaInfoCircle></FaInfoCircle>
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Track custom fields (numeric)<FaInfoCircle></FaInfoCircle>
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      {/* Setction - 3 Table 2 */}
      <TableContainer w="90%">
        <Table textAlign={"left"}>
          <Tbody>
            <Tr>
              <Td as="b">Organize</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Unlimited projects, tasks and clients
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Task and project templates
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Task and project descriptions
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Group tasks and mark as done
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Budget hours, billable or cost amounts<FaInfoCircle></FaInfoCircle>
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Budget alerts to email
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Monthly budget
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Task budgets or estimates
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Assign tasks to team members
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      {/* Setction - 3 Table 3 */}
      <TableContainer w="90%">
        <Table textAlign={"left"}>
          <Tbody>
            <Tr>
              <Td as="b">Report</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Dashboard
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Customize a detailed report (Activity)
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Download to PDF, export to XLS
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Send reports to Email
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Timesheet report
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Schedule detailed reports to email
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Team pivot report
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Economy report
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Download & customize reports in Excel
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Own logo on PDF reports
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      {/* Setction - 3 Table 4 */}
      <TableContainer w="90%">
        <Table textAlign={"left"}>
          <Tbody>
            <Tr>
              <Td as="b">Report</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Dashboard
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Customize a detailed report (Activity)
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Download to PDF, export to XLS
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Send reports to Email
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Timesheet report
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Schedule detailed reports to email
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Team pivot report
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Economy report
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Download & customize reports in Excel
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Own logo on PDF reports
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      {/* Setction - 3 Table 5 */}
      <TableContainer w="90%">
        <Table textAlign={"left"}>
          <Tbody>
            <Tr>
              <Td as="b">Integrations & Apps</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Dashboard
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Customize a detailed report (Activity)
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Download to PDF, export to XLS
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Send reports to Email
                </Flex>
              </Td>
              <Td>
                <FaCheck></FaCheck>
              </Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Timesheet report
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Schedule detailed reports to email
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Team pivot report
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Economy report
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Download & customize reports in Excel
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>

            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={2}>
                  Own logo on PDF reports
                </Flex>
              </Td>
              <Td></Td>
              <FaCheck></FaCheck>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      {/* Setction - 4*/}
      <Flex flexDirection={"column"} gap={5} justifyContent={"center"} w={"100%"} alignItems={"center"}>
        <Heading color={"colr3"}>Frequently Asked Questions</Heading>
        <FaqAccordion></FaqAccordion>
      </Flex>
      {/* Setction - 5*/}
      <Box p={6} width={"80%"} display="flex" flexDirection={'column'} bg={"blue.100"}>
        <Text w={"90%"} m={"auto"}color={'gray.600'} fontWeight={"100"} fontSize={"3.2rem"}>
          “ I have tested similar time tracking apps but they all have limits. My Hours is without a doubt the most important tool I use in my
          business. ”
        </Text>
        <Text ml={'3.6rem'} color={'gray.600'}> - Kevin from St. Petersburg, FL, USA</Text>

        <Flex mt={'2rem'} color={'primary'} justifyContent={'space-around'}>
        <Box color={'gray.600'}>
        <Text as='b'>MEMBERS</Text>
          <Text fontSize={'3rem'}>250k</Text>
        </Box>

        <Box color={'gray.600'}>
        <Text as='b'>LOGGED HOURS</Text>
          <Text fontSize={'3rem'}>1.6b</Text>
        </Box >
        <Box color={'gray.600'}>
        <Text as='b'>AVERAGE RATING</Text>
          <Text fontSize={'3rem'}>4.7/5</Text>
        </Box>

        </Flex>
      </Box>
      {/* Section 6 */}
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

export default Pricing;
