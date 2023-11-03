import Head from "next/head";
import { Box, Container, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "../navbar/navbar";
import Footer from "../footer";

const Main = ({ children, router }) => {
  const breakpointValue = useBreakpointValue({ base: "100%", md: "80vw" });

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Ahoxa Portfolio</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW={breakpointValue} pt="10" centerContent>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
