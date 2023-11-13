import { getAllPosts } from "../lib/NotionAPI";
import PostGridItem from "../components/post-gridItem";
import MotionBox from "../components/common/motionBox";
import { Container, SimpleGrid } from "@chakra-ui/react";
import HeadingImg from "../components/common/headingImg";

import CupJitoneko from "../public/post/jitoneko_cup.svg";

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
    revalidate: 60 * 60 * 24,
  };
};

const Post = ({ allPosts }) => {
  return (
    <MotionBox>
      <Container pt={10} maxW="container.lg">
        <HeadingImg title="Post" img={CupJitoneko} alt="cat in a cup" />
        <SimpleGrid columns={[1, 1, 2]} gap={6} mt={10}>
          {allPosts.map((post) => {
            return (
              <PostGridItem
                key={post.id}
                slug={post.slug}
                title={post.title}
                image={post.image}
                tags={post.tags}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </MotionBox>
  );
};

export default Post;
