import NextLink from "next/link";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Image from "next/image";

import CupJitoneko from "../public/post/jitoneko_cup.svg";

const NotFound = () => {
  return (
    <Box textAlign="center" mt={10}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        maxW="500px"
        m="0 auto"
      >
        <Image src={CupJitoneko} alt="cat in a cup" />
      </Box>
      <Heading p={10}>Page Not Found</Heading>
      <Text fontSize="xl">
        Oops!
        <br />
        The page you&apos;re looking for was not found.
      </Text>
      <Text mt={10}>
        <Button as={NextLink} href="/">
          Return to Home
        </Button>
      </Text>
    </Box>
  );
};

export default NotFound;
