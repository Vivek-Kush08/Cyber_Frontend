import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import feelingSorry from "./Feeling-sorry.png";
import Qr from "./QR.svg";
import Scam from "./scam.jpg";
import Thank from "./thank.jpg";

const Simulation = ({ value }: any) => {
  const [loginCount, setLoginCount] = useState<any>(0);

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

  // console.log("loginCount", loginCount.loginCount);

  return (
    <Center>
      <Box mx={{ base: 6, md: 20, lg: 60 }}>
        <Heading textAlign="center" mt={4} mb={8} fontWeight={500}>
          <Text color={"red"} fontWeight={700}>
            {" "}
             Gotcha !!!
          </Text>
          You were spoofed by a simulated attack.
        </Heading>

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          alignItems={"center"}
          gap={6}
        >
          <Text
            fontSize={{ base: "1.6rem", md: "2rem" }}
            textAlign={{ base: "start", md: "end" }}
            fontWeight={700}
          >
            Don't Worry ! You're human. So lets take this opportunity to learn
            something from this.
          </Text>
          <Image src={feelingSorry} w={{ base: "100%", md: "20rem" }} />
        </Grid>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          mb={8}
          alignItems={"center"}
          mt={{ base: "1rem", md: "none" }}
        >
          <Image src={Qr} w={{ base: "100%", md: "20rem" }} />

          <Text
            textAlign={{ base: "center", md: "start" }}
            fontSize={"xl"}
            fontWeight={500}
          >
            Instead of attempting to obtain your login credentials unlawfully,
            we have directed you to this educational page. You've entered our QR
            Code Awareness Simulation, designed to raise awareness about the
            risks of scanning unknown QR codes.
          </Text>
        </Grid>

        <Box mb={8} color={"black"}>
          <Box mb={4} shadow="xl" p={6} bg="blue.100" rounded={8}>
            <Heading fontSize="2xl" mb={4}>
              Purpose
            </Heading>
            <Text>
              This simulation aims to demonstrate the importance of caution when
              encountering QR codes in the wild.
            </Text>
          </Box>
          <Box shadow="xl" p={6} bg="blue.100" rounded={8}>
            <Heading fontSize="2xl" mb={4}>
              Your Participation
            </Heading>
            <Text>
              Your data and personal information remain secure as nothing has
              been compromised; this is merely a simulation and not an actual
              breach. However, it's crucial to understand how spoofing occurs
              and to take measures to safeguard your personal information from
              potential theft or compromise. Since you're here, let's seize this
              opportunity to delve into a few key aspects of this topic and
              enhance our understanding.
            </Text>
          </Box>
        </Box>

        <Box p={6} bg="teal.300" rounded={8} mb={8}>
          <Flex align="center" direction={{ base: "column", md: "unset" }}>
            <Image src={Scam} w={40} mr={4} rounded={8} />
            <Text color="white" fontSize="lg">
              QR code scams, also known as Quishing , are a type of fraud where
              a scammer provides a QR code that leads to a malicious website,
              instead of the expected resource. When scanned, these deceptive QR
              codes can download malware onto your device or lead you to
              phishing websites designed to steal your personal information.
            </Text>
          </Flex>
        </Box>

        {/* <Box p={6} bg="blue.50" rounded={8} mb={8}>
          <Checkbox textDecoration="underline" size="lg" defaultChecked>
            Accept Terms
          </Checkbox>
          <Text mt={2}>
            Please mark this checkbox if you agree to contribute your data for
            research purposes. We assure you that your data will be kept
            confidential and secure. It will be removed from our records once
            the research study is completed.
          </Text>
        </Box> */}

        <Flex direction="column" align="center" mb={8}>
          <Heading fontSize="2xl" textAlign="center" mb={4}>
            Thank You
          </Heading>
          <Text textAlign="center" mb={4}>
            Thank you for participating in our simulation. Together, we can
            promote safer online practices.
          </Text>
          <Image src={Thank} w={40} />
        </Flex>

        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} mb={8}>
          <Box bg="telegram.500" p={6} rounded={8}>
            <Heading fontSize="2xl" textAlign="center" color="white" mb={4}>
              Number of Visits
            </Heading>
            <Heading fontSize="4xl" textAlign="center" color="white" mb={4}>
              {value?.visitCount || "NA"}
            </Heading>
            <Text color="white" fontSize="lg" textAlign="center">
              This represents the total count of individuals who have scanned
              the QR code and subsequently visited this website.
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
              This indicates the total number of individuals who have scanned
              the QR code and signed in with their email.
            </Text>
          </Box>
        </Grid>
      </Box>
    </Center>
  );
};

export default Simulation;
