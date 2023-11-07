import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import Main from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

const Page = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
            <Component
              {...pageProps}
              key={router.route}
              onExitComplete={() => {
                if (typeof window !== "undefined") window.scrollTo({ top: 0 });
              }}
            />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
};

export default Page;
