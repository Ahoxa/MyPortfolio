import { Box, Flex } from "@chakra-ui/react";

const CustomSection = ({ children }) => {
  return (
    <Flex
      as="section"
      alignItems="center"
      justifyContent="flex-start"
      width="100%"
      maxWidth="70%"
      textAlign="left"
      marginBottom="1.5em"
    >
      {children}
    </Flex>
  );
};

const Tag = ({ children }) => {
  return (
    <Box
      as="span"
      fontWeight="bold"
      marginRight="1em"
      fontSize={{ base: "1rem", md: "1.5rem" }}
    >
      {children}
    </Box>
  );
};

export { CustomSection, Tag };
