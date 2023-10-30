import { Container } from "@chakra-ui/react";
import HeroImage from "../components/heroImage";
import Profile from "../components/profile";
import Bio from "../components/bio";
import SNS from "../components/sns";
import Contact from "../components/contact/contact";

const Home = () => {
  return (
    <>
      <HeroImage />
      <Profile />
      <Container maxW="container.lg">
        <Bio />
        <SNS />
        <Contact />
      </Container>
    </>
  );
};

export default Home;
