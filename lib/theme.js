import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const beige = "#D4CCAC";
const navyBlue = "#1D2B58";

const colors = {
  mode: {
    light: {
      bg: beige,
      text: navyBlue,
    },
    dark: {
      bg: navyBlue,
      text: beige,
    },
  },
};

const styles = {
  global: (props) => ({
    body: {
      color: props.theme.colors.mode[props.colorMode].text,
      bg: mode(beige, navyBlue)(props),
    },
  }),
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const fonts = {
  heading: "'Inika','Noticia Text', serif",
  body: "'Noticia Text', 'Inika', 'Cardo', serif",
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: { base: "1.5rem", md: "2.5rem" },
        fontFamily: "Inika, serif",
        textUnderlineOffset: 6,
        textDecorationThickness: 3,
        fontWeight: "bold",
        textAlign: "left",
        mt: 3,
        mb: 4,
      },
    },
  },
  Link: {
    baseStyle: () => ({
      textUnderlineOffset: 3,
    }),
  },
};

const theme = extendTheme({ colors, styles, config, fonts, components });

export default theme;
