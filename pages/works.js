import { Container, Box } from "@chakra-ui/react";

const Work = () => {
  return (
    <Container pt={10}>
      <Box
        borderRadius={"lg"}
        bgColor={{ base: "blue.100", sm: "green.100" }}
        p={3}
        mb={6}
        align="center"
      >
        Work Page is under construction now...
      </Box>
    </Container>
  );
};

export default Work;
