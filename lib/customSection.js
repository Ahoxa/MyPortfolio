import { Box, Flex } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

const CustomSection = ({ children }) => {
  const breakpointValue = useBreakpointValue({ base: "100%", md: "70%" });
  return (
    <Flex
      as="section"
      alignItems="center"
      justifyContent="flex-start"
      width="100%"
      maxWidth={breakpointValue}
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
