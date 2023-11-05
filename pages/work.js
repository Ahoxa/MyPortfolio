import { Container, SimpleGrid } from "@chakra-ui/react";
import HeadingImg from "../components/common/headingImg";
import MotionBox from "../components/common/motionBox";
import GridItem from "../components/common/gridItem";

import WorkingJitoneko from "../public/work/jitoneko_work.svg";
import thumbPomoFlow from "../public/work/pomoflow.png";
import thumbEbisu from "../public/work/ebisu.png";

const Work = () => {
  return (
    <Container pt={10} maxW="60vw">
      <HeadingImg title="Work" img={WorkingJitoneko} alt="working cat" />

      <SimpleGrid columns={[1, 1, 2]} gap={6} mt={10}>
        <MotionBox>
          <GridItem id="pomoflow" title="PomoFlow" thumbnail={thumbPomoFlow}>
            PomoFlow is a time management application that uses the Pomodoro
            Technique.
          </GridItem>
        </MotionBox>
        <MotionBox delay={0.4}>
          <GridItem id="ebisu" title="Ebisu Poster" thumbnail={thumbEbisu}>
            Osaka University Yebisu Otoko Selection @ Osaka University Hill
            Official Poster
          </GridItem>
        </MotionBox>
      </SimpleGrid>
    </Container>
  );
};

export default Work;
