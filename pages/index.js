import { Container } from "@chakra-ui/react";
import MotionBox from "../components/common/motionBox";
import HeroImage from "../components/heroImage/heroImage";
import Profile from "../components/profile";
import Bio from "../components/bio";
import SNS from "../components/sns";
import Contact from "../components/contact/contact";

const Home = () => {
  return (
    <>
      <HeroImage />
      <MotionBox delay={1}>
        <Profile />
      </MotionBox>
      <Container maxW="container.lg">
        <MotionBox delay={1.4}>
          <Bio />
        </MotionBox>
        <MotionBox delay={1.8}>
          <SNS />
        </MotionBox>
        <MotionBox delay={2.0}>
          <Contact />
        </MotionBox>
      </Container>
    </>
  );
};

export default Home;
