import NextLink from "next/link";
import {
  Flex,
  Box,
  Text,
  Badge,
  LinkBox,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";

const PostGridItem = ({ slug, title, image, tags }) => {
  const titleSize = useBreakpointValue({ base: "1.25rem", md: "1.5rem" });

  return (
    <Flex as="article" rounded="md" align="center" mb={10} w="100%" mx="1vw">
      <LinkBox>
        <Link as={NextLink} href={`/post/${slug}`}>
          <Box flex="none"  borderRadius={10} overflow="hidden" maxW="200px">
            <Image src={image} alt={title} width={200} height={200} loading="lazy" />
          </Box>
        </Link>
      </LinkBox>
      <Box flex={1} ml={5}>
        <Link as={NextLink} href={`/post/${slug}`}>
          <Text mt={2} fontSize={titleSize} fontWeight="bold">
            {title}
          </Text>
        </Link>
        <Flex flexDir="column" alignItems="flex-start">
          {tags.map((tag)=>{
            return (
              <Badge key={tag} colorScheme="facebook" mt={2} mr={2}>
                {tag}
              </Badge>
            )
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default PostGridItem;
