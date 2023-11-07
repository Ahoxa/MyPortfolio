import { Container, SimpleGrid } from "@chakra-ui/react";
import MotionBox from "../components/common/motionBox";
import HeadingImg from "../components/common/headingImg";
import GridItem from "../components/common/gridItem";

import WorkingJitoneko from "../public/work/jitoneko_work.svg";
import thumbPomoFlow from "../public/work/pomoflow/pomoflow.png";
import thumbEbisu from "../public/work/ebisu/ebisu.png";

const Work = () => {
  return (
    <MotionBox>
      <Container pt={10} maxW="60vw">
        <HeadingImg title="Work" img={WorkingJitoneko} alt="working cat" />
        <SimpleGrid columns={[1, 1, 2]} gap={6} mt={10}>
          <GridItem id="pomoflow" title="PomoFlow" thumbnail={thumbPomoFlow}>
            PomoFlow is a time management application that uses the Pomodoro
            Technique.
          </GridItem>

          <GridItem id="ebisu" title="Ebisu Poster" thumbnail={thumbEbisu}>
            Osaka University Yebisu Otoko Selection @ Osaka University Hill
            Official Poster
          </GridItem>
        </SimpleGrid>
      </Container>
    </MotionBox>
  );
};

export default Work;
