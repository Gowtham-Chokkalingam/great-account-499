import { Box, Button, Checkbox, Flex, FormControl, FormHelperText, FormLabel, Image, Input, Select, Spacer, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

const initState = { name: "", email: "",textArea:'' };
const SupportForm = () => {
    const [formData, setFormData] = useState(initState);

const {name, email,textArea} = formData;
  

  let handleInputChange = (e) => {
    const { type, name, value, checked } = e.target;
    // console.log("e:", e.target);
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Flex width={"100%"} flexDirection={"column"}>
      <FormControl display={"grid"} gap={2} margin={"auto"} w={"80%"}>
        <Select borderRadius={0} mb={5}>
          <option value="option1">I have a question before signing up...</option>
          <option value="option1">I can't access my account...</option>
          <option value="option1">Something might be broken...</option>
          <option value="option1">I'd like to request a feature...</option>
          <option value="option1">I have a billing question...</option>
          <option value="option1">Other</option>
        </Select>
        <Text as='b' mb="8px">Message: {textArea}</Text>
        <Textarea value={textArea} name="textArea" onChange={handleInputChange} placeholder="Here is a sample placeholder" size="sm" />
        <FormLabel>Name</FormLabel>
        <Input borderRadius={0} type="email" name="name" value={name} onChange={handleInputChange} />

        <FormLabel>Email</FormLabel>
        <Input borderRadius={0} type="email" name="email" value={email} onChange={handleInputChange} />

        <Flex mt={5} p={4} flexWrap={'wrap'} justifyContent={"space-between"} w={{base:'40%',md:"20%", lg:'20%'}}  height={"60px"} border={"1px"}>
          <Checkbox>Checkbox</Checkbox>
          <Image h={"110%"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png"></Image>
        </Flex>
        <Button w={{base:'30%',md:"10%", lg:'10%'}} colorScheme="blue">
          Send
        </Button>
      </FormControl>
    </Flex>
  );
};

export default SupportForm;
