import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Admin = () => {
  // console.log('value---------------',value)
  const [loginCount, setLoginCount] = useState<any>(0);

  const [value, setValue] = useState<any>();
  const [error, setError] = useState(null);

  const backendUrl = "https://cyber-alpha.vercel.app/";

  useEffect(() => {
    fetch(`${backendUrl}login`)
      .then((response) => response.json())
      .then((data) => {
        setLoginCount(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  useEffect(() => {
    // console.log("login page");
    fetch(`${backendUrl}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle response data
        // console.log(data);
        setValue(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        setError(error);
      });
  }, []);

  //   console.log("value------", value);

  return (
    <Box
      bg={
        " linear-gradient(90deg, rgba(227,111,255,1) 6%, rgba(105,183,255,1) 47%, rgba(178,119,255,1) 100%)"
      }
      h={"100vh"}
      pt={6}
    >
      <Heading textAlign={"center"}>This is Admin</Heading>
      <Grid
        templateColumns="1fr"
        gap={8}
        mb={8}
        m={"2rem"}
        mx={{ base: "1rem", lg: "16rem" }}
      >
        <Box bg="telegram.500" p={6} rounded={8}>
          <Heading fontSize="2xl" textAlign="center" color="white" mb={4}>
            Number of Visits
          </Heading>
          <Heading fontSize="4xl" textAlign="center" color="white" mb={4}>
            {value?.visitCount || "NA"}
          </Heading>
          <Text color="white" fontSize="lg" textAlign="center">
            This represents the total count of individuals who have scanned the
            QR code and subsequently visited this website.
          </Text>
        </Box>
        <Box bg="telegram.500" p={6} rounded={8}>
          <Heading fontSize="2xl" textAlign="center" color="white" mb={4}>
            Number of Sign In
          </Heading>
          <Heading fontSize="4xl" textAlign="center" color="white" mb={4}>
            {loginCount?.loginCount || "NA"}
          </Heading>
          <Text color="white" fontSize="lg" textAlign="center">
            This indicates the total number of individuals who have scanned the
            QR code and also signed in with their email.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Admin;
