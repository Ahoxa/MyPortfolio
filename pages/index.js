import { Container, Box } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container pt={10}>
      <Box
        borderRadius={"lg"}
        bgColor={{ base: "blue.100", sm: "green.100" }}
        p={3}
        mb={6}
        align="center"
        h={"2000px"}
        w={"100%"}
      >
        under construction now...
      </Box>
    </Container>
  );
};

export default Page;
