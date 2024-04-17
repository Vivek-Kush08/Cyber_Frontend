import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LoginBg from "./abc.jpg";

const Login = ({ setShowPage, setResponse }: any) => {
  // const backendUrl = "http://localhost:5000/";
  const backendUrl = "https://cyber-alpha.vercel.app/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    // console.log("login page");
    fetch(`${backendUrl}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle response data
        console.log(data);
        setResponse(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        setError(error);
      });
  }, []);

  const handleClick = () => {
    setShowPage(false);
  };

  const isValidEmail = email.includes("@");
  // const isValidPassword = password.length >= 8;

  return (
    <Box bgImage={`url(${LoginBg})`} bgRepeat="no-repeat" bgSize="cover">
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        direction={"column"}
      >
        <Heading mb={4} color={"white"}>
          Get exciting offers now
        </Heading>

        <Box
          p={6}
          shadow="md"
          borderWidth="1px"
          w={{ base: "80%", lg: "30%" }}
          bg={"gray.200"}
          rounded={14}
        >
          <Heading fontSize={"2xl"} color={"telegram.500"} my={2}>
            Sign In
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              border={"1px solid gray"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          {/* <FormControl id="password" mt={4} isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              border={"1px solid gray"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl> */}
          <Flex justifyContent={"end"}>
            <Button
              onClick={handleClick}
              size={"md"}
              colorScheme="telegram"
              mt={4}
              isDisabled={!isValidEmail}
            >
              Sign In
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
