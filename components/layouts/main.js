import Head from "next/head";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Ahoxa Portfolio</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="80vw" pt="10" centerContent>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
