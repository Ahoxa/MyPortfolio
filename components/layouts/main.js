import Head from "next/head";
import { Box, Container, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "../navbar/navbar";
import Footer from "../footer";

const Main = ({ children, router }) => {
  const breakpointValue = useBreakpointValue({ base: "100%", md: "80vw" });

  return (
    <Box as="main" pb={8} minH="calc(100vh - 100px)">
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Ahoxa Portfolio</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW={breakpointValue} pt="10" centerContent>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
