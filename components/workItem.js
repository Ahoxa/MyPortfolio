import NextLink from "next/link";
import Image from "next/image";
import {
  Heading,
  Box,
  Link,
  Badge,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Title = ({ children }) => {
  const fontSize = useBreakpointValue({ base: "1.5rem", md: "2.5rem" });

  return (
    <Box>
      <Link as={NextLink} href="/work">
        Work
      </Link>
      <span>
        {" "}
        <ChevronRightIcon />{" "}
      </span>
      <Heading display="inline-block" as="h2" fontSize={fontSize} mb={7}>
        {children}
      </Heading>
    </Box>
  );
};

const WorkImage = ({ src, alt }) => {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      w="full"
      maxW="xl"
      mb={5}
    >
      <Image src={src} alt={alt} />
    </Box>
  );
};

const Meta = ({ children }) => {
  return <Badge mr={3}>{children}</Badge>;
};

export { Title, WorkImage, Meta };
