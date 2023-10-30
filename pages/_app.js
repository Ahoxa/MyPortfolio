import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import Main from "../components/layouts/main";

const Page = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  );
};

export default Page;
