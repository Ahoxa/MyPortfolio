import NextLink from "next/link";
import { Box, Heading, Text, Link, Button } from "@chakra-ui/react";
import { pages } from "next/dist/build/templates/app-page";

const NotFound = () => {
  return (
    <Box textAlign="center" mt={10}>
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

