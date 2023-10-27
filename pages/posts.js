import { Container, Box } from "@chakra-ui/react";

const Post = () => {
  return (
    <Container pt={10}>
      <Box
        borderRadius={"lg"}
        bgColor={{ base: "blue.100", sm: "green.100" }}
        p={3}
        mb={6}
        align="center"
      >
        Post Page is under construction now...
      </Box>
    </Container>
  );
};

export default Post;
