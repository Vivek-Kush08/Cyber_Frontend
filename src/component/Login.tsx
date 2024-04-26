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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const backendUrl = "https://cyber-alpha.vercel.app/";
  useEffect(() => {
    // console.log("login page");
    fetch(`${backendUrl}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle response data
        // console.log(data);
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
    <Box
    // bgImage={
    //   "https://lh3.googleusercontent.com/p/AF1QipOohekmz8pFD-nV_ZakbWfFqMzvy4AYjswLMdnw=s1360-w1360-h1020"
    // }
    // bgRepeat="no-repeat"
    // bgSize="contain"
    >
      <Flex
        bgImage={
          "https://lh3.googleusercontent.com/p/AF1QipOohekmz8pFD-nV_ZakbWfFqMzvy4AYjswLMdnw=s1360-w1360-h1020"
        }
        bgRepeat="no-repeat"
        bgPos={"center"}
        bgSize={{ base: "cover", md: "contain" }}
        height="100vh"
        alignItems="center"
        justifyContent="center"
        direction={"column"}
      >
        <Heading mb={4} color={"white"} textAlign={"center"}>
          Where Every Bite Brings <br /> India Home
        </Heading>

        <Box
          p={6}
          shadow="lg" // Enhanced shadow for better depth
          borderWidth="1px"
          borderColor="whiteAlpha.300" // Lighter border for glass effect
          w={{ base: "80%", lg: "30%" }}
          bg="whiteAlpha.200" // Semi-transparent background
          backdropFilter="brightness(0.5) blur(2px)" // Increased blur and brightness for clear glass effect
          rounded={14}
          borderStyle="solid"
        >
          <Heading fontSize={"2xl"} color={"white"} my={2}>
            Sign In
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel color={"whiteAlpha.900"}>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              border="1px solid"
              borderColor="whiteAlpha.400" // Light border for inputs
              onChange={(e) => setEmail(e.target.value)}
              color="white"
              bg="whiteAlpha.100" // Semi-transparent input background
            />
          </FormControl>
          {/* Uncomment and adjust the password field as necessary */}

          <Flex justifyContent={"end"}>
            <Button
              onClick={handleClick}
              size={"md"}
              colorScheme="telegram"
              mt={4}
              isDisabled={!isValidEmail}
              _hover={{ bg: "telegram.600" }} // Hover effect for button
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
