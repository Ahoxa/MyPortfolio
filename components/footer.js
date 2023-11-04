import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" position="absolute" bottom={-10} width="100%" align="center" opacity={0.4} fontSize="md">
      &copy; {new Date().getFullYear()} Yuto Hayashibara. All rights reserved.
    </Box>
  );
};

export default Footer;
