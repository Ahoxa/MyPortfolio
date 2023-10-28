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
  body: "'Noticia Text', 'Inika', 'Cardo', serif",
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: navyBlue,
        textDecorationThickness: 3,
        fontWeight: "bold",
        textAlign: "center",
        mt: 3,
        mb: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      textUnderlineOffset: 3,
    }),
  },
};

const theme = extendTheme({ colors, styles, config, fonts, components });

export default theme;
