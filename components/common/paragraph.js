import { Text } from "@chakra-ui/react";

const P = ({ children }) => (
  <Text
    textAlign="justify"
    textIndent="1.5rem"
    hyphens="auto"
    mx={7}
    fontSize={{
      base: "1rem",
      md: "1.25rem",
      lg: "1.4rem",
    }}
  >
    {children}
  </Text>
);

export default P;
