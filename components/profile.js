import NextLink from "next/link";
import {
  VStack,
  Container,
  Flex,
  Image,
  Box,
  Text,
  Button,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

const Profile = () => {
  const bgColor = useColorModeValue("#EEE2B6", "#295C82");
  const textcolor = useColorModeValue("#D4CCAC", "#1D2B58");
  const buttonColor = useColorModeValue("#1D2B58", "#D4CCAC");
  const direction = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Container maxW="container.lg" mb="20vh">
      <VStack p="5%" bg={bgColor} borderRadius={10} mt={8}>
        <Text fontSize={{ base: "0.8rem", sm: "1rem", md: "1.35rem" }}>
          Hello, I'm
        </Text>
        <Text
          fontSize={{ base: "32px", md: "40px" }}
          fontFamily="Inika"
          fontWeight="bold"
        >
          Yuto Hayashibara
        </Text>
        <Text fontSize={{ base: "0.9rem", md: "1rem" }}>
          digital carpenter ( Artist / Developer / Designer )
        </Text>
        <Flex direction={direction} alignItems="center">
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} mr={3}>
            <Image
              src="/home/retroMe.png"
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderRadius="full"
              borderStyle="solid"
              maxW={{ base: "7rem", md: "10rem", lg: "14rem" }}
              display="inline-block"
              alt="Yuto's profile image"
            />
          </Box>

          <Box
            ml={2}
            my={5}
            fontSize={{
              base: "0.75rem",
              sm: "1rem",
              md: "1.25rem",
              lg: "1.4rem",
            }}
            textIndent="1.5em"
          >
            <Text>
              <strong>Yuto</strong> is a fledgling front-end engineer
              passionately pursuing the expression he wants to create, as{" "}
              <strong>Ahoxa</strong> in the Web.
            </Text>
            <Text>
              He has a commitment to make beautiful stuff by himself. He also
              hopes to solve everyday problems with a variety of beautiful
              expressions, using not only coding but also design and modeling.
            </Text>
          </Box>
        </Flex>
        <Button
          as={NextLink}
          href={"/works"}
          bg={buttonColor}
          size={{ base: "sm", md: "md", lg: "lg" }}
        >
          <Text color={textcolor}>See My Works</Text>
        </Button>
      </VStack>
    </Container>
  );
};

export default Profile;
