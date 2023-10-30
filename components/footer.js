import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box mt="2vh" align="center" opacity={0.4} fontSize="md">
      &copy; {new Date().getFullYear()} Yuto Hayashibara. All rights reserved.
    </Box>
  );
};

export default Footer;
