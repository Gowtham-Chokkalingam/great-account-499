import { Box, Container, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    //   {/* col 1 */}
    <Box bg={"blue.600"} color="footer" textAlign="center" p={4} w={"100%"}>
      <Flex
        w={"100%"}
        p={5}
        flexDirection={{ base: "column", md: "row" }}
        gap={10}
        justifyContent={"space-around"}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <VStack alignItems={{ base: "center", md: "flex-start" }}>
          <Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9236f9ab08c7bdf83fe75_Logo-300px.png"></Image>
          <Text>© 2022 My Hours. All rights reserved. </Text>
        </VStack>

        {/* col 2 */}
        <VStack alignItems={{ base: "center", md: "flex-start" }}>
          <Text as="b">Product</Text>
          <Text>How it works</Text>
          <Text>Features</Text>
          <Text>Mobile app</Text>
          <Text>Use case collection</Text>
          <Text>Pricing</Text>
          <Text>Guides</Text>
          <Text>Customer Reviews</Text>
          <Text>Start Free</Text>
        </VStack>

        {/* col 3 */}
        <VStack alignItems={{ base: "center", md: "flex-start" }}>
          <Text as="b">Resources</Text>
          <Text>Time Tracking Library</Text>
          <Text>About</Text>
          <Text>Terms of Use</Text>
          <Text>Use case collection</Text>
          <Text>Sitemap</Text>
          <Text>Free Timesheet templates</Text>
          <Text>Best Time Tracking Apps of 2022</Text>
          <Text>Time Management Apps</Text>

          <Text>Free Time Card Calculator</Text>
        </VStack>

        {/* col 4 */}
        <VStack alignItems={{ base: "center", md: "flex-start" }}>
          <Text as="b">Use Cases</Text>
          <Text>Project billing</Text>
          <Text>Time reports and Project analytics</Text>
          <Text>Attendance and Absence tracking</Text>
          <Text>Expense tracking</Text>
          <Text>Sitemap</Text>
          <Text>Calculating project profitability</Text>
          <Text>Timesheet time tracking</Text>

          <Text>Free Time Card Calculator</Text>
        </VStack>

        {/* col 5 */}
        <VStack alignItems={{ base: "center", md: "flex-start" }}>
          <Text as="b">Integrations</Text>
          <Text>QuickBooks</Text>
          <Text>Zapier</Text>
          <Text></Text>
          <Text></Text>
        </VStack>

        {/* col 6 */}
        <VStack alignItems={{ base: "center", md: "flex-start" }}>
          <Text as="b">Social</Text>

          <Text>Facebook</Text>
          <Text>Twitter</Text>
        </VStack>
      </Flex>
      <Text as="b">Looking for employee attendance and absence tracking? Visit All Hours.</Text>
    </Box>
  );
};

export default Footer;
