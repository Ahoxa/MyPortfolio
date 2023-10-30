import {
  Heading,
  Box,
  VStack,
  Button,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import EmailModal from "./mailModal";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textcolor = useColorModeValue("#D4CCAC", "#1D2B58");
  const buttonColor = useColorModeValue("#1D2B58", "#D4CCAC");

  return (
    <>
      <Heading variant="section-title" mt="5vh" mb="2vh">
        Contact Me!
      </Heading>
      <VStack>
        <Box
          my={5}
          fontWeight="bold"
          fontSize={{
            base: "0.75rem",
            sm: "1rem",
            md: "1.25rem",
            lg: "1.4rem",
          }}
        >
          If you would like to contact me, you can do so here.
          <br />I welcome any feedback on my work.
        </Box>
        <Button
          size={{ base: "sm", md: "md", lg: "lg" }}
          bg={buttonColor}
          onClick={onOpen}
        >
          <Box
            mr={2}
            fontSize={{
              base: "0.75rem",
              sm: "1rem",
              md: "1.25rem",
              lg: "1.4rem",
            }}
            color={textcolor}
          >
            <HiMail />
          </Box>
          <Text color={textcolor}>Send me a Mail!</Text>
        </Button>
        <EmailModal isOpen={isOpen} onClose={onClose} />
      </VStack>
    </>
  );
};

export default Contact;
