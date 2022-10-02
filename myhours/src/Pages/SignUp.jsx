import React, { useMemo } from "react";
import axios from "axios";

import Select from "react-select";
import countryList from "react-select-country-list";

import { Box, Flex, Text, FormControl, FormLabel, Input, Button, Image, GridItem, Grid, useToast } from "@chakra-ui/react";
import { getData } from "./AxiosApi";
import { useNavigate } from "react-router-dom";

const VARIANT_COLOR = "teal";

const SignUp = () => {
  const initState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
    country: "",
    password: "",
    confirmPassword: "",
  };

  const toast = useToast();

  const [formData, setFromData] = React.useState(initState);
  const [resStatus, setResStatus] = React.useState(false);
  const [data, setData] = React.useState([]);

  const { firstName, lastName, confirmPassword, email, age, password, phone, country } = formData;
  const [passwordChk, setPasswrdChek] = React.useState(false);
  const [emailCheck, setEmailChek] = React.useState(false);

  const navigate = useNavigate();

  // For country drop down
  const [value, setValue] = React.useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    console.log("value:", value.label);
    setValue(value.label);
    setFromData({ ...formData, country: value.label });
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    const val = name === "age" ? Number(value) : value;

    setFromData({ ...formData, [name]: val });

    // setFromData(e.target.value);
  };

  const hanldeClick = () => {
    let p1 = password;
    let p2 = confirmPassword;

    let em = formData.email;

    let ans = data.map((ele) => {
      if (em === ele.email) {
        return true;
      } else {
        return false;
      }
    });

    //  if (data.find((item) => item.email === em)) {

    //   setEmailChek(true);
    //     toast({
    //       title: "User Check",
    //       position: "top",
    //       description: "Email Already Exist",
    //       status: "warning",
    //       duration: 2000,
    //       isClosable: true,
    //     });

    //   return true;
    //   } else {
    //     return false;
    //   }

    if (ans.includes(true)) {
      setEmailChek(true);
      toast({
        title: "User Check",
        position: "top",
        description: "Email Already Exist",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setEmailChek(false);
    }
    if (p1 !== p2) {
      setPasswrdChek(true);
      toast({
        title: "PASSWORD CHECK",
        position: "top",
        description: "PASSWORD IS NOT MATCHING, Please Enter The Correct Password",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      setFromData({ ...formData, password: "", confirmPassword: "" });
      setPasswrdChek(false);

      return;
    }
    // Send a POST request axios

    console.log("emailCheck:", emailCheck, passwordChk);
    if (!passwordChk && !emailCheck) {
      setResStatus(false);

      console.log("emailCheck:", emailCheck, passwordChk);

      axios({
        method: "POST",
        url: `http://localhost:8080/signUp`,
        data: formData,
      }).then((res) => {
        console.log("res:", res);
        setResStatus(true);
        setFromData(initState);
      });
    }

    if (resStatus) {
      toast({
        title: "Account created.",
        position: "top",
        description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/singin");
      }, 2000);

      return;
    }
  };
  return (
    <Box mt={4} height={"600px"}>
      <Flex width="full" align="center" justifyContent="center">
        <Box borderWidth={1} px={4} width="full" maxWidth="500px" borderRadius={4} textAlign="center" boxShadow="lg">
          <Box p={4}>
            {/* <SignUpHeader /> */}
            <Box textAlign={"center"}>
              <Image
                w={"30%"}
                m={"auto"}
                src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg"
              ></Image>
              <Text fontWeight={700} fontSize={{ base: "1.2rem", md: "2rem" }} mt={2}>
                Sign Up to Myhours Account
              </Text>
            </Box>
            {/* <SignUpForm /> */}
            <Grid mt={2} w="full" templateColumns="repeat(2, 1fr)" gap={2}>
              {/* 1 First Name */}
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder="Name" type="text" name="firstName" value={firstName} onChange={handleChange} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder="Name" type="text" name="lastName" value={lastName} onChange={handleChange} />
                </FormControl>
              </GridItem>

              {/* 2 Email*/}
              <GridItem colSpan={{ base: 2, md: 2 }}>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="Email" type="email" name="email" value={email} onChange={handleChange} />
                </FormControl>
              </GridItem>
              {/* 3 Password*/}
              <GridItem colSpan={{ base: 2, md: 2 }}>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder="Password" type="password" name="password" value={password} onChange={handleChange} />
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 2, md: 2 }}>
                <FormControl isRequired>
                  <FormLabel>Confrim Password</FormLabel>
                  <Input placeholder="Password" type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                </FormControl>
              </GridItem>

              {/* 3 Phone*/}
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel>Phone</FormLabel>
                  <Input placeholder="Phone" type="text" name="phone" value={phone} onChange={handleChange} />
                </FormControl>
              </GridItem>

              {/* 4 Age*/}
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl isRequired>
                  <FormLabel>Age</FormLabel>
                  <Input placeholder="Age" type="number" name="age" value={age} onChange={handleChange} />
                </FormControl>
              </GridItem>

              {/* 5 Address*/}

              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Country</FormLabel>

                  <Select placeholder={value ? value : "Select Country"} name="country" options={options} value={value} onChange={changeHandler} />
                  {/* <Select name="country" value={country} onChange={handleChange} placeholder="Select country">
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="japan">Japan</option>
                  </Select> */}
                </FormControl>
              </GridItem>

              {/* 8 Buttom */}
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <Button colorScheme="teal" onClick={hanldeClick} w={"full"}>
                    Sign Up
                  </Button>
                </FormControl>
              </GridItem>
            </Grid>
            {/* <signUp /> */}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUp;
