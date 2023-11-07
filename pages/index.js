import { Container } from "@chakra-ui/react";
import MotionBox from "../components/common/motionBox";
import HeroImage from "../components/heroImage/heroImage";
import Profile from "../components/profile";
import Bio from "../components/bio";
import SNS from "../components/sns";
import Contact from "../components/contact/contact";

const Home = () => {
  return (
    <MotionBox>
      <HeroImage />
      <Profile />
      <Container maxW="container.lg">
        <Bio />
        <SNS />
        <Contact />
      </Container>
    </MotionBox>
  );
};

export default Home;
