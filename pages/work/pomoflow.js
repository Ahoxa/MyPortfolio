import NextLink from "next/link";
import HeadingImg from "../../components/common/headingImg";
import P from "../../components/common/paragraph";
import {
  Container,
  VStack,
  Badge,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/workItem";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import WorkingJitoneko from "../../public/work/jitoneko_work.svg";
import pomoflow01 from "../../public/work/pomoflow/pomoflow01.png";
import pomoflow02 from "../../public/work//pomoflow/pomoflow02.png";

const Work = () => {
  return (
    <Container pt={10} maxW="60vw">
      <HeadingImg title="Work" img={WorkingJitoneko} alt="working cat" />
      <Title>
        PomoFlow <Badge>2023-</Badge>
      </Title>
      <P>
        PomoFlow is a pomodoro timer app that helps you focus on your work by
        using the pomodoro technique. Moving away from a plain, inorganic UI and
        incorporating the idea of gamification can get you off to a comfortable
        start.
      </P>
      <P>
        This application was created in my early days of React and will be
        updated a lot in the future to make it more practical.
      </P>
      <P>Currently in production (alpha version)</P>
      <List ml={5} my={7}>
        <ListItem>
          <Meta>website</Meta>
          <Link as={NextLink} href="https://pomofl0w.netlify.app/" isExternal>
            https://pomofl0w.netlify.app/
            <ExternalLinkIcon mx="5px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>stack</Meta>
          <span>React, ChakraUI, Three.js, Blender</span>
        </ListItem>
      </List>
      <VStack>
        <WorkImage src={pomoflow01} alt="homepage" />
        <WorkImage src={pomoflow02} alt="workpage" />
      </VStack>
    </Container>
  );
};

export default Work;
