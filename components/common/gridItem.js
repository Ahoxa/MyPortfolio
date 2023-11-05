import NextLink from "next/link";
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";

const GridItem = ({ children, id, title, thumbnail }) => {
  const titleSize = useBreakpointValue({ base: "1.5rem", md: "2rem" });
  const textSize = useBreakpointValue({ base: "1rem", md: "1.2rem" });

  return (
    <>
      <LinkBox>
        <Link as={NextLink} href={`/work/${id}`}>
          <Box
            borderRadius={10}
            overflow="hidden"
            maxW="500px"
            transition="transform 0.5s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            <Image
              src={thumbnail}
              alt={title}
              placeholder="blur"
              loading="lazy"
            />
          </Box>
        </Link>
        <LinkOverlay href={`/work/${id}`} target="_blank">
          <Text mt={2} fontSize={titleSize} fontWeight="bold">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={textSize}>{children}</Text>
      </LinkBox>
    </>
  );
};

export default GridItem;
