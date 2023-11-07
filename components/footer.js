import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" align="center" opacity={0.4} fontSize="md" mt="3vh">
      &copy; {new Date().getFullYear()} Yuto Hayashibara. All rights reserved.
    </Box>
  );
};

export default Footer;
