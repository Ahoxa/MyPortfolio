import NextLink from "next/link";
import MotionBox from "../components/common/motionBox";
import { Container, Box, Heading, Text, Button } from "@chakra-ui/react";
import HeadingImg from "../components/common/headingImg";

import CupJitoneko from "../public/post/jitoneko_cup.svg";

const Illust = () => {
  return (
    <MotionBox>
      <Container pt={10} maxW="60vw">
        <HeadingImg title="Illustration" img={CupJitoneko} alt="cat in a cup" />
        <Box textAlign="center" mt={10}>
          <Heading p={10}>Sorry!</Heading>
          <Text fontSize="xl">
            This page is under construction in a big hurry!!
          </Text>
          <Text mt={10}>
            <Button as={NextLink} href="/">
              Return to Home
            </Button>
          </Text>
        </Box>
      </Container>
    </MotionBox>
  );
};

export default Illust;
