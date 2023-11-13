import { getAllPosts, getSinglePost } from "../../lib/NotionAPI";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import MotionBox from "../../components/common/motionBox";
import P from "../../components/common/paragraph";
import { Box, Container, Heading, Badge, Flex } from "@chakra-ui/react";

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 24,
  };
};

const Posts = ({ post }) => {
  return (
    <MotionBox>
      <Container pt={10} maxW="container.lg">
        <Heading>{post.metadata.title}</Heading>
        <Box>
          {post.metadata.tags.map((tag) => {
            return (
              <Badge key={tag} colorScheme="facebook" my={2} mr={2}>
                {tag}
              </Badge>
            );
          })}
        </Box>
        <Flex gap={2} mb={5}>
          Update: {post.metadata.lastEdited}
        </Flex>
        <Box>
          <ReactMarkdown
            components={{
              code(props) {
                const { inline, children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                if (inline) {
                  return (
                    <code
                      style={{
                        color: "#D4CCAC",
                        backgroundColor: "red",
                        padding: "0.2em 0.4em",
                        borderRadius: "0.5em",
                      }}
                      {...rest}
                    />
                  );
                } else if (match) {
                  return (
                    <Flex alignItems="center" justifyContent="center">
                      <SyntaxHighlighter
                        PreTag={Box}
                        language={match[1]}
                        children={String(children).replace(/\n$/, "")}
                        style={vscDarkPlus}
                        {...rest}
                        w="80%"
                        borderRadius={8}
                      />
                    </Flex>
                  );
                } else {
                  return (
                    <code className={className} {...rest}>
                      {children}
                    </code>
                  );
                }
              },
              p: P,
              h1: Heading,
              h2: Heading,
              img: ({ node, ...props }) => {
                return (
                  <Box
                    as="img"
                    {...props}
                    maxW={{ base: "100%", md: "80%" }}
                    height="auto"
                    borderRadius={15}
                    mx="auto"
                    my={5}
                  />
                );
              },
            }}
          >
            {post.markdown}
          </ReactMarkdown>
        </Box>
      </Container>
    </MotionBox>
  );
};

export default Posts;
