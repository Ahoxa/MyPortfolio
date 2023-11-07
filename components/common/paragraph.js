import { Text } from "@chakra-ui/react";

const P = ({ children }) => (
  <Text
    textAlign="justify"
    textIndent="1.5rem"
    hyphens="auto"
    fontSize={{
      base: "0.75rem",
      sm: "1rem",
      md: "1.25rem",
      lg: "1.4rem",
    }}
  >
    {children}
  </Text>
);

export default P;
