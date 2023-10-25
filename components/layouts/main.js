import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Yuto Hayahibara's Portfolio</title>
      </Head>
      <Container maxW="container.md" pt={10}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
