import React, { useContext } from "react";
import { Box, Flex, Heading, Text, Link, FormControl, FormLabel, Input, Stack, Checkbox, Button, Image, useToast, Toast } from "@chakra-ui/react";
import { getData } from "./AxiosApi";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const VARIANT_COLOR = "teal";
const initState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const toast = useToast();
  const [formData, setFromData] = React.useState(initState);
  const { loginUser, authState } = useContext(AuthContext);

  const [data, setData] = React.useState([]);

  const [userName, setUserName] = React.useState("");

  const { email, password } = formData;

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFromData({ ...formData, [name]: value });
  };

  const fetchData = () => {
    getData()
      .then((res) => {
        console.log("res:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const hanldeClick = (em, pwd) => {
    // e.preventDefault();

    data.forEach((element) => {});

    let ans = data.map((ele) => {
      if (em === ele.email && pwd === ele.password) {
        console.log("usetname", ele.firstName);
        // setUserName();
        let token = Math.floor(Math.random() * 20022);
        loginUser(token, ele.firstName);
        return true;
      } else {
        return false;
      }
    });

    if (ans.includes(true)) {
      toast({
        title: "Signin Successfull.",
        position: "top",
        description: "Welcome To MyHours.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      toast({
        title: "Authentication Check",
        position: "top",
        description: "Entered Password or Email is Incorrect",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box borderWidth={1} px={4} width="full" maxWidth="500px" borderRadius={4} textAlign="center" boxShadow="lg">
        <Box p={4}>
          {/* <LoginHeader></LoginHeader> */}
          <Box textAlign={"center"}>
            <Image
              w={"30%"}
              m={"auto"}
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg"
            ></Image>
            <Heading>Sign In to Myhours Account</Heading>
            <Text>
              Or <Link color={`${VARIANT_COLOR}.500`}>start your 14 days trial</Link>
            </Text>
          </Box>
          {/* <LoginForm /> */}
          <Box my={8} textAlign="left">
            <form>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name={"email"} value={email} onChange={handleChange} placeholder="Enter your email address" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" name={"password"} value={password} onChange={handleChange} placeholder="Enter your password" />
              </FormControl>

              <Stack isInline justifyContent="space-between" mt={4}>
                <Box>
                  <Checkbox>Remember Me</Checkbox>
                </Box>
                <Box>
                  <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
                </Box>
              </Stack>

              <Button onClick={() => hanldeClick(email, password)} colorScheme="teal" width="full" mt={4}>
                Sign In
              </Button>
            </form>
            <Flex justifyContent="center" gap={2} mt={4}>
              <Box>
                <Text>Not on Myhours yet ? </Text>
              </Box>
              <Box color={`${VARIANT_COLOR}.500`}>
                <NavLink to="/signup">Sign up</NavLink>
              </Box>
            </Flex>
          </Box>
          {/* <signUp/>  */}
        </Box>
      </Box>
    </Flex>
  );
};

export default SignIn;
