import { Container } from "@chakra-ui/react";
import HeroImage from "../components/heroImage";
import Profile from "../components/profile";
import Bio from "../components/bio";
import SNS from "../components/sns";

const Home = () => {
  return (
    <>
      <HeroImage />
      <Profile />
      <Container maxW="container.lg">
        <Bio />
        <SNS />
      </Container>
    </>
  );
};

export default Home;
