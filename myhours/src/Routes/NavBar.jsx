import React from "react";
import { Button, Flex, Heading, Spacer, Box, Image, IconButton, useColorMode, Link, useTheme, Text, useMediaQuery, HStack } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DraewerNav from "./DraewerNav";

const fontSize = { base: "12px", md: "15px", lg: "18px" };

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const theme = useTheme();
  const [isMatch] = useMediaQuery("(max-width: 800px)");
  console.log("isMatch:", isMatch);

  console.log("theme:", theme);
  return (
    <Flex boxShadow="md" width="full" h={20}paddingInline={5} marginRight={4} justifyContent={"space-between"} alignItems={"center"} gap="2">
      <Box>
      <Link href='/home' >

    
        <Image
          width={{ base: "100px", md: "120px", lg: "156px" }}
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg"
        ></Image>
          </Link>
      </Box>
      {isMatch ? (
        <DraewerNav></DraewerNav>
      ) : (
        <HStack >
          <Box p="1">
            <NavLink to="/howis">
              <Text color='blue.500' fontWeight="bold" fontSize={fontSize}>
                How it Works
              </Text>
            </NavLink>
          </Box>
          <Box p="1">
            <NavLink to="/usecases">
              <Text  color='blue.500' fontWeight="bold" fontSize={fontSize}>
                Use Cases
              </Text>
            </NavLink>
          </Box>
          <Box p="1">
            <NavLink to="/pricing">
              <Text color='blue.500' fontWeight="bold" fontSize={fontSize}>
                Pricing
              </Text>
            </NavLink>
          </Box>

          <Box p="1">
            <NavLink to="/support">
              <Text color='blue.500' fontWeight="bold" fontSize={fontSize}>
                Support
              </Text>
            </NavLink>
          </Box>
          <Box p="1">
            <NavLink to="/support">
              <Text  color='blue.500' fontWeight="bold" fontSize={fontSize}>
                Sign In
              </Text>
            </NavLink>
          </Box>
          <Box p="1">
            <Button bg={'blue.400'} colorScheme='teal' color='white'> Get My Hours Free</Button>
          </Box>
          <Box>
            <IconButton
              onClick={toggleColorMode}
              isRound={true}
              size="md"
              
              alignSelf="flex-end"
              icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
            ></IconButton>
          </Box>
        </HStack>
      )}
    </Flex>
  );
};

export default NavBar;
