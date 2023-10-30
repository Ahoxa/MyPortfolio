import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import Footer from "../footer";

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
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
