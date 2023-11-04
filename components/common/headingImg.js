import { Flex, Box, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

const HeadingImg = ({ title, img, alt }) => {
  const fontSize = useBreakpointValue({ base: "4rem", md: "6rem" });


  return (
    <Flex align="center" justify="center" position="relative" mb={5}>
      <Text fontSize={fontSize} zIndex={1} bg="transparent">
        {title}
      </Text>
      <Box ml="-10%" zIndex={0}>
        <Image src={img} alt={alt} layout="responsive" />
      </Box>
    </Flex>
  );
};

export default HeadingImg;