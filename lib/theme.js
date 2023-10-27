import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const beige = "#D4CCAC";
const navyBlue = "#1D2B58";

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      bg: mode(beige, navyBlue)(props),
    },
  }),
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = {
  base: "0px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const fonts = {
  body: "Noticia Text, Inika, serif",
};

const theme = extendTheme({ styles, config, breakpoints, fonts });

export default theme;
