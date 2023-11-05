import NextLink from "next/link";
import { Container, Box, Heading, Button, Text } from "@chakra-ui/react";
import Image from "next/image";

import CupJitoneko from "../../public/post/jitoneko_cup.svg";

const Work = () => {
  return (
    <Container pt={10} maxW="60vw">
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
        <Heading p={10}>Sorry!</Heading>
        <Text fontSize="xl">
          This page is under construction in a big hurry!!
        </Text>
        <Box mt={10}>
          <Button as={NextLink} href="/work">
            Return to Work
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Work;
